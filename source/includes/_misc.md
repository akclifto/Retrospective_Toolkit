# Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
include_cats | false | If set to true, the result will also include cats.
available | true | If set to false, the result will include kittens that have already been adopted.

<aside class="success">
Remember — a happy kitten is an authenticated kitten!
</aside>


<aside class="warning">Inside HTML code blocks like this one, you can't use Markdown, so use <code>&lt;code&gt;</code> blocks to denote code.</aside>


# URL Parameters

Parameter | Description
--------- | -----------
ID | The ID of the kitten to retrieve

# HTTP Request

`DELETE http://example.com/kittens/<ID>`

# URL Parameters

Parameter | Description
--------- | -----------
ID | The ID of the kitten to delete