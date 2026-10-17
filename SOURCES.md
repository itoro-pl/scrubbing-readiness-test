# Sources — what the tests are based on

**[Wersja polska → ZRODLA.md](ZRODLA.md)**

The tests follow three kinds of sources: IETF RFCs, RIPE NCC documents and
RIPE Database documentation, and the public onboarding documentation of
well-known DDoS mitigation (scrubbing) providers. Checked on 15 October 2026.
Where a provider does not publish a requirement, we say so instead of guessing.

## 1. IETF RFCs

| Document | What we take from it | Test in the tool |
|---|---|---|
| [RFC 6811](https://www.rfc-editor.org/rfc/rfc6811) — BGP Prefix Origin Validation | the three states: valid, invalid, not found | RPKI state of each announced prefix |
| [RFC 9319](https://www.rfc-editor.org/rfc/rfc9319) (BCP 185) — The Use of maxLength in the RPKI, §5 | use minimal ROAs, avoid maxLength unless it has no effect | „broad maxLength” recommendation; ROA suggestions in two variants (separate ROAs per /24, or maxLength on the aggregate) with the trade-off explained |
| RFC 9319, §5.1 — ROAs for DDoS mitigation services | a provider that announces the customer's prefix needs its own ROA, and the ROA must exist **before** the attack because RPKI propagates slower than BGP | ROA check for the scrubbing provider's AS („operator announces from its own AS” mode); propagation warning |
| RFC 9319, §6 — RTBH (RTDR) | do not widen ROAs (maxLength, very specific prefixes) to support RTBH | item in „what cannot be checked from outside” |
| [RFC 9582](https://www.rfc-editor.org/rfc/rfc9582) — A Profile for ROAs | maxLength equal to the prefix length is not encoded; ROA semantics | ROA coverage calculation |
| [RFC 6483](https://www.rfc-editor.org/rfc/rfc6483) — Validation of Route Origination, §4 | an AS0 ROA means the prefix must not be routed | AS0 ROA check |
| [RFC 7454](https://www.rfc-editor.org/rfc/rfc7454) (BCP 194) — BGP Operations and Security, §6.1.3 | IPv4 prefixes longer than /24 and IPv6 longer than /48 are commonly filtered; IRR as the basis for prefix filters | prefix length check; split target /24 and /48; route object checks |
| [RFC 2622](https://www.rfc-editor.org/rfc/rfc2622) — RPSL, §5 | hierarchical set names (AS64496:AS-NAME) | AS-SET name check |
| [RFC 7999](https://www.rfc-editor.org/rfc/rfc7999) — BLACKHOLE community | RTBH signalling, separate from diversion | context for the RTBH note |
| ASPA — IETF SIDROPS ([draft-ietf-sidrops-aspa-profile](https://datatracker.ietf.org/doc/draft-ietf-sidrops-aspa-profile/), [draft-ietf-sidrops-aspa-verification](https://datatracker.ietf.org/doc/draft-ietf-sidrops-aspa-verification/)) | a customer's ASPA must list every provider AS on the path | ASPA must include the scrubbing provider's AS |

## 2. RIPE NCC and the RIPE Database

| Document | What we take from it | Test in the tool |
|---|---|---|
| [ripe-705](https://www.ripe.net/publications/docs/ripe-705) — Abuse Contact Management in the RIPE Database | abuse-c is mandatory for aut-num and for directly allocated inetnum/inet6num | abuse contact check |
| [RIPE Database documentation — Set objects](https://docs.db.ripe.net/Set-Objects/) | new as-set objects must have hierarchical names; existing short names stay valid | AS-SET name check (recommendation, not an error) |
| [RIPE Database documentation — Protection of objects with hierarchical names](https://docs.db.ripe.net/Authorisation/Protection-of-Objects-with-Hierarchical-Names/) | creation of a hierarchical set is authorised by the parent object | rationale for the recommendation |
| [RIPE Labs — Out-of-region route(6) and aut-num objects](https://labs.ripe.net/author/denis/out-of-region-route6-and-aut-num-objects-in-the-ripe-database/) | out-of-region objects moved to source RIPE-NONAUTH (since 4 September 2018) | RIPE-NONAUTH is not treated as an authoritative IRR |
| [RIPEstat Data API](https://stat.ripe.net/docs/data-api/) | announced prefixes, ROAs and ASPA, abuse contact, BGP neighbours | data source |
| [RIPE Database REST API](https://docs.db.ripe.net/RIPE-Database-Structure/REST-API-Data-model/) | aut-num, as-set, inetnum/inet6num (holder organisation, status PA/PI) | AS-SET contents; LOA need (other organisation, PA space from a LIR) |

## 3. RIR documentation used for the step-by-step instructions

| RIR | ROA | IRR (route, as-set) | abuse contact | ASPA |
|---|---|---|---|---|
| RIPE NCC | [ROA management](https://www.ripe.net/manage-ips-and-asns/resource-management/rpki/resource-certification-roa-management/) | [RIPE Database docs](https://docs.db.ripe.net/) | [abuse-c FAQ](https://www.ripe.net/manage-ips-and-asns/resource-management/faqs-for-abuse-c/) | [ASPA in the RPKI Dashboard](https://labs.ripe.net/author/tim_bruijnzeels/aspa-in-the-rpki-dashboard-a-new-layer-of-routing-security/) |
| ARIN | [Hosted RPKI](https://www.arin.net/resources/manage/rpki/options/hosted/) | [ARIN IRR user guide](https://www.arin.net/resources/manage/irr/userguide/) | [POC records](https://www.arin.net/resources/guide/account/records/poc/) | [ASPA](https://www.arin.net/resources/manage/rpki/aspa/) |
| APNIC | [Creating ROAs in MyAPNIC](https://blog.apnic.net/2019/09/11/how-to-creating-rpki-roas-in-myapnic/) | [as-set guide](https://www.apnic.net/manage-ip/using-whois/guide/as-set/) | [abuse-c](https://www.apnic.net/about-apnic/service-updates/apnic-whois-database-abuse-c/) | [ASPA at APNIC](https://blog.apnic.net/2026/07/09/aspa-at-apnic-strengthening-bgp-path-validation/) |
| AFRINIC | [RPKI](https://afrinic.net/support/rpki) | [route objects](https://afrinic.net/support/irr/on-myafrinic/creating-route-object), [as-set](https://afrinic.net/support/irr/on-myafrinic/create-as-set-objects) | [abuse contact](https://afrinic.net/support/how-to-publish-abuse-contact-information) | not announced (October 2026) |
| LACNIC | [IRR (route objects generated from ROAs)](https://www.lacnic.net/5921/2/lacnic/internet-routing-registry-irr) | [IRR help](https://lacnic.zendesk.com/hc/es/categories/360002625214-Internet-Routing-Registry) | [LAC-2018-5](https://politicas.lacnic.net/politicas/detail/id/LAC-2018-5) | [announcement, October 2026](https://blog.lacnic.net/en/caribnog-lacnic/) |

Resource holder and abuse data for every RIR come from RDAP; the
authoritative server is found through the [IANA RDAP bootstrap](https://data.iana.org/rdap/)
([RFC 9224](https://www.rfc-editor.org/rfc/rfc9224)).

## 4. AS-SET hygiene — talks and articles

| Author(s) | Title, venue, date | What we take from it | Test in the tool |
|---|---|---|---|
| Lasse Jarlskov (Telia Company) | „Securing your AS-set”, [BalticNOG 2025](https://events.balticnog.org/event/1/contributions/51/), Vilnius, 25 September 2025; same talk at the Netnod meeting, 8 October 2025 ([slides, PDF](https://www.netnod.se/sites/default/files/2025-10/10.Securing%20your%20AS-Set-Netnod.pptx_.pdf)) | three AS-SET types (customers, peers, IXP members) — only the customer set is used to build filters; rule of thumb „would you re-advertise this in BGP?”; bigger is not better, recursion is dangerous; clean up regularly; check your customers' AS-SET sizes; check who includes you | AS-SET size against BGP customers, nesting depth, largest member sets, IXP/peer sets inside a customer set, members not seen in BGP, who includes your AS |
| Lasse Jarlskov (Telia Company); ASPA part with Job Snijders | „Prelude to a BGP hijack?”, [DKNOG15](https://events.dknog.dk/event/32/contributions/297/), Copenhagen, 7 March 2025 ([video](https://www.youtube.com/watch?v=ejwp6b6lVWQ)) | anyone can put your AS in their AS-SET; with a spoofed origin the route is ROA-valid and passes RPSL-based transit filters; defence: ASPA and monitoring IRRs for new references to your AS | who includes your AS (sets of networks with no BGP relationship are flagged); ASPA recommendation; monitoring step |
| Doug Madory, Job Snijders | [„The Scourge of Excessive AS-SETs”](https://www.kentik.com/blog/the-scourge-of-excessive-as-sets/), Kentik blog, 23 April 2025 | thousands of AS-SETs expand to over 1,000 ASNs, some beyond the whole routing table; such filters did not stop real route leaks; keep membership minimal, avoid recursion, use hierarchical names, name the authoritative IRR source in PeeringDB | AS-SET size and depth, hierarchical name, PeeringDB AS-SET with source |
| MANRS | [„Module 2: IRRs, RPKI, and PeeringDB”](https://manrs.org/resources/training/tutorials/irrs-rpki-peeringdb/) (MANRS training) | document your customer cone with an as-set (e.g. AS64500:AS-CUSTOMERS), register route objects, publish routing policy in aut-num, keep PeeringDB up to date | AS-SET in aut-num export, AS-SET contains your AS, PeeringDB |

## 5. Other sources

| Source | What we take from it |
|---|---|
| [MANRS — Network Operators](https://manrs.org/netops/) | register routing intent in IRR and RPKI, keep contacts up to date (RIR database, PeeringDB) |
| [IRR Explorer (NLNOG)](https://irrexplorer.nlnog.net/) | route objects from all IRRs with their RPKI status — data source |
| [PeeringDB API](https://www.peeringdb.com/apidocs/) | the AS-SET many operators use to build filters — data source |

## 6. Scrubbing provider documentation

The tool itself does not name providers; it refers to „typical requirements of
scrubbing centre operators”. The list below is what those requirements are
based on.

| Provider | Published requirements | Source |
|---|---|---|
| Cloudflare Magic Transit | minimum /24; IRR entries must match the origin AS; LOA (from the ISP as well if the ISP announces); GRE or IPsec with MSS clamping (≤1436 / ≤1360) set before cut-over; safe withdrawal: announce from your own network first | [prerequisites](https://developers.cloudflare.com/magic-transit/prerequisites/), [advertise prefixes](https://developers.cloudflare.com/magic-transit/how-to/advertise-prefixes/) |
| Cloudflare BYOIP | IPv4 /24, IPv6 /48; prefix in one of the five RIRs; exact route/route6 object with the announcing origin (an RPKI-derived IRR entry is not enough); ROA verified; at least 5 h provisioning | [get started](https://developers.cloudflare.com/byoip/get-started/), [IRR best practices](https://developers.cloudflare.com/byoip/concepts/irr-entries/best-practices/) |
| Lumen DDoS Mitigation | off-net minimum /24 and /48; a customer with ROAs must add a ROA for the Lumen AS or ROV networks drop the announcement; the customer must ignore more specifics of its own space sent back by Lumen | [service guide](https://www.lumen.com/en-us/about/legal/ddos-mitigation-service-guide.html) |
| Link11 | only /24 prefixes; route object in an authoritative RIR database, recognised within 48 h; public AS required | [FAQ](https://docs.link11.com/product-guides/network-ddos/faq/general-questions) |
| F5 Distributed Cloud Routed DDoS | /24 or shorter; authoritative IRR (RIPE, ARIN…); ROA required; LOA for prefixes the customer does not hold | [L3/L4 DDoS mitigation](https://docs.cloud.f5.com/docs-v2/ddos-and-transit-services/how-tos/network-firewall/l3l4-ddos-mitigation) |
| Gcore | prefix from /8 to /24; public AS; LOA mandatory; GRE MTU 1476 / MSS 1436 | [network submission](https://docs.gcore.com/ddos-protection/onboarding-service/network-submission) |
| OVHcloud BYOIP | IPv4 /24–/19; inetnum must match the range exactly (PA, PI, LEGACY); route object with the OVHcloud or customer origin; range not announced elsewhere | [Bring your own IP](https://docs.ovhcloud.com/en/guides/network/bring-your-own-ip/bring-your-own-ip) |
| NASK anti-DDoS (Poland), variant II | AS from RIPE NCC; mask up to /24 (larger blocks protected as a set of /24s); the customer must be able to create route objects and change ROAs; prepend or suppress the /24 to transit | [regulations, annex](https://www.nask.pl/media/2025/01/ADDoS-Zalacznik-nr-2-_-Zalacznik-nr-1_do_Regulaminu.pdf) |
| Akamai Prolexic Routed | GRE (RFC 2784) with keepalives, MSS 1436 / 1380, decapsulation capacity ≥ 2× CIR. ROA/IRR/LOA requirements are not published | [service descriptions](https://www.akamai.com/site/en/documents/akamai-services-descriptions.pdf) |
| Imperva DDoS Protection for Networks | GRE to at least two data centres; in always-on mode Imperva must be the best path (prepend, local-pref or a more specific prefix). ROA/IRR/LOA requirements are not published | [documentation](https://docs.imperva.com/) |

Not used, because no public technical requirements were found: Radware,
NETSCOUT Arbor Cloud, Corero, Voxility, Path.net and Polish operators other
than NASK.

## 7. From sources to tests

| Test | Sources |
|---|---|
| Every /24 (/48) split out of an announced block is RPKI-valid | RFC 6811, RFC 9319 §5.1, RFC 7454; Link11, NASK, Cloudflare |
| Prefix not longer than /24 (/48) | RFC 7454 §6.1.3; Cloudflare, Lumen, Link11, F5, Gcore, NASK |
| Route object with your AS in a RIR database (not RADB, not RIPE-NONAUTH, not RPKI-derived) | RFC 7454; RIPE Labs (RIPE-NONAUTH); Cloudflare BYOIP, Link11, F5 |
| Route object for each /24 that may be announced | Cloudflare BYOIP (exact match), Link11, NASK |
| LOA when the space belongs to another organisation or is PA from a LIR | Cloudflare, F5, Gcore |
| ROA for the provider's AS when it originates | RFC 9319 §5.1; Lumen |
| ASPA includes the provider's AS | IETF SIDROPS ASPA |
| abuse-c | ripe-705; MANRS |
| AS-SET contains your AS, hierarchical name | RFC 2622; RIPE Database documentation; MANRS |
| AS0 ROA, conflicting route objects with another origin | RFC 6483; RFC 6811 |
| AS-SET size, depth, largest members, IXP/peer sets, members not seen in BGP | Jarlskov (BalticNOG 2025); Madory & Snijders (2025); MANRS module 2 |
| Who includes your AS in their AS-SETs | Jarlskov (BalticNOG 2025, DKNOG15) |
| Broad maxLength (recommendation) | RFC 9319 §5 |
