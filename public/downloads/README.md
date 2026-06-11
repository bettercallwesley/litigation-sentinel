# public/downloads/ is NON-CANONICAL

Never publish a raw /downloads/ URL anywhere (site, welcome email,
newsletter, LinkedIn). Every published download link goes through the
logging redirect at /api/download/<asset>, which writes the asset-download
event to the durable sink and then 302s here. Reconciled plan C3.

Expected assets:

- litigation-intelligence-buyer-guide.pdf (build item C7; until it lands,
  /api/download/buyer-guide returns a graceful 404 notice)
- carrier-rico-playbook.pdf (build item C8, next Friday content cycle)
