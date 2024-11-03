#!name = RevenueCat Universal hack

[Header Rewrite]
http-response ^https?://api\.revenuecat\.com/.+/(receipts$|subscribers/?(.*?)*$) header-del X-RevenueCat-ETag
http-response ^https?://api\.revenuecat\.com/.+/(receipts$|subscribers/?(.*?)*$) header-del x-revenuecat-etag
^https:\/\/api\.revenuecat\.com\/.+\/subscribers\/[^/]+/(offerings|attributes)$ url request-header (\r\n)X-RevenueCat-ETag:.+(\r\n) request-header $1X-RevenueCat-ETag:$2
^https:\/\/api\.revenuecat\.com\/.+\/(receipts|subscribers) url request-header (\r\n)X-RevenueCat-ETag:.+(\r\n) request-header $1X-RevenueCat-ETag:$2
[Script]
https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[^/]+$) url script-response-body raw.githubusercontent.com/sultan1sa/Rewrite/refs/heads/main/Revenuecat-unlocked/qx_revenucat.js
[MITM]
HOSTNAME = api.revenuecat.com