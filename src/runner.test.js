import { getNextFrameIndex } from './runner'

const makeFrames = (start, count) => {
    const list = [];
    for (let i = start; i < count + start; ++i) {
        list.push({timestamp: i});
    }
    return list;
};

describe('makeFrames', () => {
    it("should return a frame list of length 2 when called with 2", () => {
        expect(makeFrames(0, 2)).toEqual([
            {
                timestamp: 0
            }, {
                timestamp: 1
            }
        ]);
    });
    it("should return three frames when called with 3 and 5", () => {
        expect(makeFrames(3, 3)).toEqual([
            {
                timestamp: 3
            }, {
                timestamp: 4
            }, {
                timestamp: 5
            }
        ]);
    });
});

describe('getNextFrame', () => {

    it("should return -1 for the empty list", () => {
        expect(getNextFrameIndex([], 0)).toBe(-1);
    });

    it("should return the index of the last frame if time is after all frames", () => {
        const frames = makeFrames(0, 5);
        expect(getNextFrameIndex(frames, 8)).toBe(4);
    });

    it("should return -1 if time is before all frames", () => {
        const frames = makeFrames(2, 4);
        expect(getNextFrameIndex(frames, 1)).toBe(-1);
    });

    it("should return the index of the frame that time is equal to", () => {
        const frames = makeFrames(1, 5);
        expect(getNextFrameIndex(frames, 3)).toBe(2);
    });

    it("should always return an index of a frame that is before time", () => {
        const frames = makeFrames(0, 4);
        expect(getNextFrameIndex(frames, 2.5)).toBe(2);
    });
})