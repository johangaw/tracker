

export function getNextFrameIndex(list, time) {
    if (list.length === 0) {
        return -1;
    }
    if(list[list.length - 1].timestamp < time) {
        return list.length - 1;
    }
    const index = list.findIndex(frame => {
        return time <= frame.timestamp;
    });
    return list[index].timestamp === time ? index : index - 1;
}


