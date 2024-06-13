from twilio.rest import Client

account_sid = '.. ... ...'
auth_token = '.. .. .. ..'

client = Client(account_sid, auth_token)

message = client.api.account.messages.create(
    to="+12407338037",
    from_="+18335963515",
    body="HUBA HUBA ma lady"
)

print(message)
