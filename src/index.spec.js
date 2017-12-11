import test from 'ava';
import logger from './index';

test('logger is executed without failing', t => {
  t.notThrows(logger);
});
