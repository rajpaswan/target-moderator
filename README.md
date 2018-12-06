Target Moderator
================

A rest service to validate/moderate comments or feedback submitted by users.

### Setup
```
npm install
```

### Configuration
Update `.env` file to change these environment variables.
- SERVER_PORT
- BAD_WORDS
- GOOD_WORDS

### Deployment
```
node server.js
```

### Contracts

Get api details

``` http
GET /api HTTP/1.1
Host: localhost:<SERVER_PORT>
```

``` http
{
    "validate": {
        "link": "http://localhost:3000/api/validate",
        "method": "POST",
        "description": "to validate a comment or feedback"
    },
    "moderate": {
        "link": "http://localhost:3000/api/moderate",
        "method": "POST",
        "description": "to moderate a comment or feedback"
    }
}
```

Validate a comment

``` http
POST /api/validate HTTP/1.1
Content-Type: application/json;charset=UTF-8
Host: localhost:<SERVER_PORT>

{
    "comment" : "your comment here"
}
```

``` http
{
    "comment" : "your comment here",
    "valid": "true | false"
}
```

Moderate a comment

``` http
POST /api/moderate HTTP/1.1
Content-Type: application/json;charset=UTF-8
Host: localhost:<SERVER_PORT>

{
    "comment" : "your comment here"
}
```

``` http
{
    "comment" : "your comment here",
    "moderated_comment": "moderate comment here"
}
```