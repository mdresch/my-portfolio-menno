---
icon: network-wired
---

# OpenAPI

You can sync GitBook pages with an OpenAPI or Swagger file or a URL to include auto-generated API methods in your documentation.

### OpenAPI block

GitBook's OpenAPI block is powered by [Scalar](https://scalar.com/), so you can test your APIs directly from your docs.

## Create a new user

<mark style="color:green;">`POST`</mark> `/users`

\<Description of the endpoint>

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Body**

| Name   | Type   | Description      |
| ------ | ------ | ---------------- |
| `name` | string | Name of the user |
| `age`  | number | Age of the user  |

**Response**

{% tabs %}
{% tab title="200" %}
```json
{
  "id": 1,
  "name": "John",
  "age": 30
}
```
{% endtab %}

{% tab title="400" %}
```json
{
  "error": "Invalid request"
}
```
{% endtab %}
{% endtabs %}

{% openapi-operation spec="my-portfolio-api" path="/auth/login" method="post" %}
[Broken link](broken-reference)
{% endopenapi-operation %}

{% openapi-operation spec="my-portfolio-api" path="/projects" method="get" %}
[Broken link](broken-reference)
{% endopenapi-operation %}

{% openapi-operation spec="my-portfolio-api" path="/projects" method="post" %}
[Broken link](broken-reference)
{% endopenapi-operation %}

{% openapi-operation spec="my-portfolio-api" path="/projects/{id}" method="get" %}
[Broken link](broken-reference)
{% endopenapi-operation %}

{% openapi-operation spec="my-portfolio-api" path="/projects/{id}" method="put" %}
[Broken link](broken-reference)
{% endopenapi-operation %}

{% openapi-operation spec="my-portfolio-api" path="/projects/{id}" method="delete" %}
[Broken link](broken-reference)
{% endopenapi-operation %}

{% openapi-operation spec="my-portfolio-api" path="/skills" method="get" %}
[Broken link](broken-reference)
{% endopenapi-operation %}

{% openapi-operation spec="my-portfolio-api" path="/skills" method="post" %}
[Broken link](broken-reference)
{% endopenapi-operation %}

{% openapi-operation spec="my-portfolio-api" path="/skills/{id}" method="get" %}
[Broken link](broken-reference)
{% endopenapi-operation %}

{% openapi-operation spec="my-portfolio-api" path="/skills/{id}" method="put" %}
[Broken link](broken-reference)
{% endopenapi-operation %}

{% openapi-operation spec="my-portfolio-api" path="/skills/{id}" method="delete" %}
[Broken link](broken-reference)
{% endopenapi-operation %}

{% openapi-operation spec="my-portfolio-api" path="/skills/categories" method="get" %}
[Broken link](broken-reference)
{% endopenapi-operation %}

{% openapi-operation spec="my-portfolio-api" path="/skills/category/{category}" method="get" %}
[Broken link](broken-reference)
{% endopenapi-operation %}

{% openapi-operation spec="my-portfolio-api" path="/contact" method="post" %}
[Broken link](broken-reference)
{% endopenapi-operation %}

{% openapi-operation spec="my-portfolio-api" path="/contact" method="get" %}
[Broken link](broken-reference)
{% endopenapi-operation %}

{% openapi-operation spec="my-portfolio-api" path="/contact/{id}" method="get" %}
[Broken link](broken-reference)
{% endopenapi-operation %}

{% openapi-operation spec="my-portfolio-api" path="/contact/{id}" method="delete" %}
[Broken link](broken-reference)
{% endopenapi-operation %}
