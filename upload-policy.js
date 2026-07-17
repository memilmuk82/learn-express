const imageExtensions = Object.freeze({
    'image/gif': '.gif',
    'image/jpeg': '.jpg',
    'image/png': '.png',
    'image/webp': '.webp',
});

const isAllowedImage = (mimeType) => Object.hasOwn(imageExtensions, mimeType);

const makeImageFilename = (mimeType, now = Date.now(), random = Math.random()) => {
    if (!isAllowedImage(mimeType)) {
        throw new Error('지원하지 않는 이미지 형식입니다.');
    }
    return `image-${now}-${Math.round(random * 1E9)}${imageExtensions[mimeType]}`;
};

module.exports = { isAllowedImage, makeImageFilename };
