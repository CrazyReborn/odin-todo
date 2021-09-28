import intervalToDuration from 'date-fns/intervalToDuration';

import { defaulTask } from './projects';

const timeLeft = (() => {
    function onTask(defaulTask) {
        const now = Date.now();
        const due = Date.UTC(defaulTask.dueDate);
        console.log(now);
        console.log(due);
    };
    return {
        onTask,
    }
})();


export {timeLeft}