const test = require('node:test');
const assert = require('node:assert/strict');

const { isAllowedImage, makeImageFilename } = require('../upload-policy');

test('허용한 이미지 MIME 형식만 통과시킨다', () => {
    assert.equal(isAllowedImage('image/png'), true);
    assert.equal(isAllowedImage('text/html'), false);
});

test('사용자 파일명 대신 서버 생성 파일명을 사용한다', () => {
    assert.equal(makeImageFilename('image/jpeg', 1234, 0.5), 'image-1234-500000000.jpg');
});
