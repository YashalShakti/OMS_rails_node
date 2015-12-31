rails new backend -d=postgresql /
cd backend /
rake db:create RAILS_ENV:"development" /
rails g scaffold customer name:string email:string /
rails g scaffold order amount:decimal customer_id:integer /
rails g scaffold coupon status:integer customer_id:integer /
rake db:migrate

