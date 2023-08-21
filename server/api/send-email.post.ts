import { useCompiler } from '#vue-email'

export default defineEventHandler(async () => {
  try {
    const template = await useCompiler('Welcome.vue', {
      username: 'Dave',
    });

    if (!template) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Not found',
      });
    }

    return template;
  } catch (error) {
    console.error(error);

    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
    })
  }
})