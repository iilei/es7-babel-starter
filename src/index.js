import sum from './sum';

const log = console.log;

const dbConfig = {
  server: 'localhost',
  isOnline: true,
};

log(`Results: ${sum(1, 2)}`);

const dbCon = new Promise((resolve, reject) => {
  log(`Try connecting to database: ${dbConfig.server}`);
  // eslint-disable-next-line no-unused-expressions
  dbConfig.isOnline
    ? resolve('online')
    : reject('offline');
}).then(data => log(`Promise resolved: ${data}`)).catch(err => log(`Promise rejected: ${err.toString()}`));

log(`Promise Info: ${dbCon}`);
