const Translate = require('@google-cloud/translate');

// Your Google Cloud Platform project ID
const projectId = 'spicedfinal';

// Instantiates a client
const translateClient = Translate({
  projectId: projectId
});

// The text to translate
const text = 'Hallo';
// The target language
const target = 'en';

// Translates some text into Russian
translateClient.translate(text, target)
  .then((results) => {
    const translation = results[0];

    console.log(`Text: ${text}`);
    console.log(`Translation: ${translation}`);
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });
// [END translate_quickstart]
