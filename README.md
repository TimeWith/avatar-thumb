# AvatarThumb

Circular profile image with initials fallback

## Install

```bash
$ npm install @time-with/avatar-thumb
or
$ yarn add @time-with/avatar-thumb
```

## Usage

Add the Component to the root Router of your React layout

    import AvatarThumb from '@time-with/avatar-thumb'

    render() {
      return (
        <div>
          <AvatarThumb
            src={ src }
            firstName={ firstName }
            lastName={ lastName }
            bgColor={ bgColor }
            radius={ radius }
            fontSize={ fontSize }
            color={ color }
            style={ avatarStyle }
          />

## License

MIT
