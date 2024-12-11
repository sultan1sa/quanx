^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[^/]+$) url script-response-body https://raw.githubusercontent.com/sultan1sa/quanx/main/Rewrite/Script/Revenuecat_crack.js
^https:\/\/api\.revenuecat\.com\/.+\/subscribers\/[^/]+/(offerings|attributes)$ url request-header (\r\n)X-RevenueCat-ETag:.+(\r\n) request-header $1X-RevenueCat-ETag:$2
^https:\/\/api\.revenuecat\.com\/.+\/(receipts|subscribers) url request-header (\r\n)X-RevenueCat-ETag:.+(\r\n) request-header $1X-RevenueCat-ETag:$2

hostname = api.revenuecat.com