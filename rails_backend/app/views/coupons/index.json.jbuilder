json.array!(@coupons) do |coupon|
  json.extract! coupon, :id, :status, :customer_id
  json.url coupon_url(coupon, format: :json)
end
