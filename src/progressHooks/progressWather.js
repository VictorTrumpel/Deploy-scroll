export function createProgressStack(animStack) {
  const progressStack = {}
  animStack.forEach((item, index) => {
    progressStack[animStack[index]] = 0
  })

  const setProgressStack = (stack, offset) => {
    const scroll = offset > 0 ? "scroll-to-bot" : "scroll-to-top";
    const stackKeys = offset > 0 ? Object.keys(stack) : Object.keys(stack).reverse();
    const factor = stackKeys.length;

    for (let i = 0; i < stackKeys.length; i++) {
      let progress = stack[stackKeys[i]];
      if (progress < 1 && scroll === "scroll-to-bot") {
        progress += offset * factor;
        if (progress > 1) progress = 1;
        stack[stackKeys[i]] = progress;
        break;
      }
      if (progress > 0 && scroll === "scroll-to-top") {
        progress += offset * factor;
        if (progress < 0) progress = 0;
        stack[stackKeys[i]] = progress;
        break;
      }
    }
  }
  return [progressStack, setProgressStack]
}

export function createGlobalProgress() {
  let globalProgress = 0;
  return (progress) => {
    let offset = progress - globalProgress;
    globalProgress = progress;
    return offset;
  }
}