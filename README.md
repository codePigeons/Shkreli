#Shkreli.js
*Video background: exquisitify your landing page*

`Shkreli.js` is a lighweight javascript library for you to use in your projects. Sugoi for landing pages, portfolio, etc...

##Basic Usage
1. Include the library in your document's `<head>`

  ```html
  <head>
    <script type="text/javascript" src="shkreli-min.js"></script>
  </head>
  ```
## Setup

1. Include the library in your document's `<head>` (Shkreli doesn't require jQuery at all in order to work)
2. At the end of your html document place the following snippet and voilà:
```html
<script>
  // To attach Shkreli to a block-level element
	new Shkreli({
         'element': '#banner',
         'mp4': 'Pigeon-Impossible.mp4',
		 'cover': 'Pigeon-Impossible.jpeg',
    });
</script>
```
## Parameters

| Name | Description | Type | Default |
|------|-------------|------|---------|
| `start` | This parameter controls whether or not the video starts at an (x) time.  | Integer or String | 0 |
| `end` | This parameter controls whether or not the video ends at an (x) time and requires the start time to be set. | Integer or String | 0 |
| `cover` | Some mobile cannot handle video backgrounds, it is recommended to also use a cover.. | String | path/to/cover.jpeg |
| `mp4` | Use this one if your video has MP4 for format. | String | path/to/video.mp4 |
| `ogv` | Use this one if your video has OGV for format. | String | path/to/video.ogv |
| `webm` | Use this one if your video has WEBM for format. | String | path/to/video.webm |

Info. As your visitors will have different web browsers, it is recommended to have your video on the 3 formats (mp4,ogv,webm).

## License
Shkreli.js is licensed under the GPL license. (https://opensource.org/licenses/gpl-license)

## Contributing
Pull requests are the way to go here. Match the naming convention (camelCase, etc...]) and put clear tile,description for commits.