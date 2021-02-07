import anime from "animejs"

export function isMobile() {
  return (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
      navigator.userAgent
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      navigator.userAgent.substr(0, 4)
    )
  );
}

export class Animation {
  /**
   * 给予一个元素方向淡入或淡出效果
   * 
   * @param inst Vue 实例，一般提供 `this`
   * @param inORout 选择是进入还是离开，仅能为 `in` 或 `out`
   * @param direction 选择方向，仅能为 `top`、`bottom`、`left` 和 `right`。该方向是指这个元素出现时的运动朝向
   * @param sel 选择器，选择相应的元素。支持 class `.`、id `#` 等等
   * @param duration 选填，动画持续时间，用于控制动画速度，单位毫秒，默认 750
   * @param delay 选填，动画延迟，用于控制动画执行时间，单位毫秒，默认 0
   */
  public static ease(
    inORout: "in" | "out",
    direction: Direction,
    sel: string | HTMLElement | Array<string> | Array<HTMLElement>,
    duration: number = 750,
    delay: number = 0,
    endpoint: number = 100
  ) {
    anime({
      targets: sel,
      translateY:
        (direction === "top" || direction === "bottom")
          ? inORout === "in"
            ? [direction === "top" ? endpoint : -endpoint, 0]
            : [0, endpoint]
          : [0, 0],
      translateX:
        (direction === "left" || direction === "right")
          ? inORout === "in"
            ? [direction === "right" ? endpoint : -endpoint, 0]
            : [0, endpoint]
          : [0, 0],
      opacity: inORout === "in" ? [0, 1] : [1, 0],
      easing: "easeOutExpo",
      duration,
      delay,
    });
  }

  public static scale(inORout: "in" | "out", scale: number = 1, sel: string | HTMLElement | Array<string> | Array<HTMLElement>, duration: number = 750, delay: number = 0) {
    anime({
      targets: sel,
      scale: [0, scale],
      opacity: inORout === "in" ? [0, 1] : [1, 0],
      easing: "easeOutExpo",
      duration,
      delay
    })
  }
}

/**
 * 获取一个属于 [min, max] 的伪随机整数
 * 
 * @param min 最小值，包含
 * @param max 最大值，包含
 */
export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 快速给元素添加进入的动画效果（自下而上滑动淡入）
 * 
 * @param ob v-view 调用时传入的专有参数，具体可查看 @/interface.ts
 */
export function visEffect(ob: ViewObject) {
  // remove opacity:0 settings
  ob.target.element.style.opacity = "";
  Animation.ease("in", "top", ob.target.element);
}

export function getNodeTree(node: Node): boolean | NodeTreeObject {
  if (node.hasChildNodes()) {
      var children = [];
      for (var j = 0; j < node.childNodes.length; j++) {
          children.push(getNodeTree(node.childNodes[j]));
      }

      return {
          nodeName: node.nodeName,
          parentName: (node.parentNode as (Node & ParentNode)).nodeName,
          children: children,
          // @ts-ignore
          content: node.innerText || "",
      };
  }

  return false;
}