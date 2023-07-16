import { ErrorMapper } from "utils/ErrorMapper"

declare global {
  /*
    Example types, expand on these or remove them and add your own.
    Note: Values, properties defined here do no fully *exist* by this type definiton alone.
          You must also give them an implemention if you would like to use them. (ex. actually setting a `role` property in a Creeps memory)

    Types added in this `global` block are in an ambient, global context. This is needed because `main.ts` is a module file (uses import or export).
    Interfaces matching on name from @types/screeps will be merged. This is how you can extend the 'built-in' interfaces from @types/screeps.
  */
  // // Memory extension samples
  // interface Memory {
  //   uuid: number;
  //   log: any;
  // }

  // interface CreepMemory {
  //   role: string;
  //   working: boolean;
  // }

  // Syntax for adding proprties to `global` (ex "global.log")
  namespace NodeJS {
    interface Global {
      log: any;
    }
  }
}

// 游戏入口函数
// When compiling TS to JS and bundling with rollup, the line numbers and file names in error messages change
// This utility uses source maps to get the line numbers and file names of the original, TS source code
export const loop = ErrorMapper.wrapLoop(
    () => {
        // 获取时间
        let time = Game.time;
        // 删除死亡的 creep 的内存
        for (const name in Memory.creeps) {
            if (!(name in Game.creeps)) {
            delete Memory.creeps[name];
            }
        }
        console.log("现在需要开始构思框架~");
    }
);
