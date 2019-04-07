import { TextTruncatePipe } from './text-truncate.pipe';

describe('TextTruncatePipe', () => {
  it('create an instance', () => {
    const pipe = new TextTruncatePipe();
    expect(pipe).toBeTruthy();
  });

  it('should equal text when text length less than limit', () => {
    const pipe = new TextTruncatePipe();
    expect(pipe.truncateText('Test', 8)).toEqual('Test');
  });

  it('should truncate text', () => {
    const pipe = new TextTruncatePipe();
    expect(pipe.truncateText('This is a test text', 8)).toEqual('This is ...');
  });

  it('should equal undefined', () => {
    const pipe = new TextTruncatePipe();
    expect(pipe.truncateText(undefined, 8)).toBeUndefined();
  });

});
