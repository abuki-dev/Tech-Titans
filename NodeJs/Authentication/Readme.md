# Autetcation basics

simply its a guard or an opning secturity to our sysetm that asksif teh user making the request is avalable on database or have acces to lg in this called authencathion
but when we come to athorizition this point chekes if we are intened to acces the specfic room or feature at the system
so Autentcation first and later authoriziations

# JWT (JSON web token)

suppose this as a digital card that after sucussuful authencation we given this card that we tell the server we are autencated to stay inside teh server and acces the fatures that are allowed to us

## 4 step authencation process

```
1,Log in :the usersends the username and teh password to the server
2,issue: the server cheks teh reditioals and the data if tehy are matched if its exist teh server generates JWT and give it to th euser
3 Storage: the client recves and saves it inside the Browser eg Localstorage
4 Request :For every requeset teh clinet sends to the serer it binds JWT with it

```

## Parts Of JWT

it loke liek a long atirng but have 3 maon parts

### 1 Header

tells the server what type of token data is this and which hasing was used inside it

### payload

its midddle part of teh token ad stores tehd atas like ID usernme role and otehr credintials
the Payload is encoded to base64 not encoded so that never stlre sensetiv edatas like raw password and creaidt card numbers

### Signature

Final and the most crutioal part which have the digital signatire that only the server have
this data prevents temperign
in short JWT allow staleless authentacio that server doenot have to store sessipn data in the databse simply trusts the signature
