import { faker } from '@faker-js/faker';

faker.seed(10);

export function createPostDataPool(size) {
  const data = new Array(size).fill(undefined);
  return data.map(() => ({
      empty: '',
      button_label_dummy: faker.lorem.word(),
      url_dummy: faker.internet.url(),
      markdown_dummy: "# " + faker.lorem.sentence(),
      html_dummy: "<h1>" + faker.lorem.sentence() + "</h1>",
      callout_dummy: faker.lorem.sentence(),
      public_preview_dummy: faker.lorem.sentence(),
      email_content_dummy: faker.lorem.sentence(),
      header_toggle_dummy:faker.lorem.sentence(),
      content_toggle_dummy:faker.lorem.sentence(),
      header_header_toggle_dummy:faker.lorem.sentence(),
      subheader_dummy: faker.lorem.sentence(),
      

  }));
}