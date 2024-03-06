import Image from "next/image";

import { useRef, useState } from "react";

// Image assets
import shurangama from "../public/mantraWheel/mantra_text_shurangama.png"
import bg from "../public/mantraWheel/mantra_bg.png"

const Style: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "black 2px solid",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  col: {
    display: "flex",
    flexDirection: "column",
  },
  button: {
    background: "none",
    border: "none",
    position: "relative",
    width: "220px",
    height: "220px",
  },
  rotate: {
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "2",
    rotate: "4662deg",  // song length = 12m57s, 360deg per 1min, 4462deg for 12m57s
    // rotate: "360deg",  // 1 rotation per song playback
    transition: "all 777s linear",  // song length = 12m57s, 12m * 60s + 57s = 720s + 57 = 777s
    // transition: "all 3s linear",  // 12mins * 60secs = 720s (spin for total 12mins)
  },
  static: {
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "2",
    rotate: "0deg", // comment out for instant reset
    transition: "all 13s ease-out", // comment out for instant reset
    // transition: "all 13s ease-out", // comment out for instant reset
  }
};

type Props = {
  // h: number,
  // w: number,
  // altText: string,
}

export const MantraWheel = ({
  // h,
  // w,
  // altText,
}: Props) => {
  const [playing, setPlaying] = useState(false);

  // Audio assets
  let shurangama_audio = useRef<HTMLAudioElement>(new Audio("/mantraWheel/shurangama.mp3"));

  const handleAudio = () => {
    shurangama_audio.current.pause();
    if (playing === false) {
      shurangama_audio.current.currentTime = 0;
      shurangama_audio.current.play();
    }
    setPlaying(!playing)
  }

  return (
    <div style={Style.container}>
      <div style={Style.row}>
        <button style={Style.button} onClick={() => handleAudio()}>
          <Image src={bg}
            style={Style.static}
            alt={"Mantra wheel"}
            height={220}
            width={220}
            loading={"eager"}>
          </Image>
          <Image
            style={playing ? Style.rotate : Style.static}
            src={shurangama}
            alt={"Shurangama mantra"}
            height={220}
            width={220}
            loading={"eager"}>
          </Image>
        </button>
        <div>
          <fieldset>
            <label>選擇神咒: </label>
            <select>
              <option value="shurangama">楞嚴神咒</option>
              <option value="vijaya">尊勝神咒</option>
              <option value="puan">普庵神咒</option>
              <option value="nilakantha">大悲神咒</option>
            </select>
          </fieldset>
          <fieldset>
            <label>選擇語言: </label>
            <select>
              <option value="zhHANT">繁體中文</option>
              <option value="zhHANS">簡體中文</option>
              <option value="en">English</option>
              <option value="de">Deutsche</option>
            </select>
          </fieldset>
          <fieldset>
            <label>統計: </label>
            <span>本次: 0</span><br></br>
            <span>累計: 0</span><br></br>
            <span>全球總計: 0</span><br></br>
          </fieldset>
        </div>
      </div>
      <div style={Style.col}>
        WIP: LRC File, LRC Parser, Sync Lyric, Simple music player<br></br>
        https://dev.to/mcanam/javascript-lyric-synchronizer-4i15<br></br>
        <textarea cols={100} rows={50} readOnly={true}>
          南無楞嚴會上佛菩薩
          南無楞嚴會上佛菩薩
          南無楞嚴會上佛菩薩
          妙湛總持不動尊
          首楞嚴王世希有
          銷我億劫顛倒想
          不歷僧祇獲法身
          願今得果成寶王
          還度如是恒沙眾
          將此深心奉塵刹
          是則名為報佛恩
          伏請世尊為證明
          五濁惡世誓先入
          如一眾生未成佛
          終不於此取泥洹
          大雄大力大慈悲
          希更審除微細惑
          令我早登無上覺
          於十方界坐道場
          舜若多性可銷亡
          爍迦羅心無動轉
          南無常住十方佛
          南無常住十方法
          南無常住十方僧
          南無釋迦牟尼佛
          南無佛頂首楞嚴
          南無觀世音菩薩
          南無金剛藏菩薩
          爾時世尊
          從肉髻中
          涌百寶光
          光中涌出
          千葉寶蓮
          有化如來
          坐寶花中
          頂放十道
          百寶光明
          一一光明
          皆徧示現
          十恆河沙
          金剛密跡
          擎山持杵
          徧虛空界
          大眾仰觀
          畏愛兼抱
          求佛哀祐
          一心聽佛
          無見頂相
          放光如來
          宣說神咒
          南無薩怛他
          蘇伽多耶
          阿囉訶帝
          三藐三菩陀寫
          薩怛他
          佛陀俱胝瑟尼釤
          南無薩婆
          勃陀勃地
          薩跢鞞弊
          南無薩多南
          三藐三菩陀
          俱知喃
          娑舍囉婆迦
          僧伽喃
          南無盧雞阿羅漢跢喃
          南無蘇盧多波那喃
          南無娑羯唎陁伽彌喃
          南無盧雞三藐伽跢喃
          三藐伽波囉
          底波多那喃
          南無提婆離瑟赧
          南無悉陁耶
          毗地耶
          陀囉離瑟赧
          舍波奴
          揭囉訶
          娑訶娑囉摩他喃
          南無跋囉訶摩泥
          南無因陀囉耶
          南無婆伽婆帝
          盧陀囉耶
          烏摩般帝
          娑醯夜耶
          南無婆伽婆帝
          那囉野
          拏耶
          槃遮摩訶三慕陀囉
          南無悉羯唎多耶
          南無婆伽婆帝
          摩訶迦囉耶
          地唎般剌那
          伽囉
          毗陀囉
          波拏迦囉耶
          阿地目帝
          尸摩舍那泥
          婆悉泥
          摩怛唎伽拏
          南無悉羯唎多耶
          南無婆伽婆帝
          多他伽跢
          俱囉耶
          南無般頭摩
          俱囉耶
          南無跋闍囉
          俱囉耶
          南無摩尼
          俱囉耶
          南無伽闍
          俱囉耶
          南無婆伽婆帝
          帝唎茶
          輸囉西那
          波囉訶囉拏囉闍耶
          跢他伽多耶
          南無婆伽婆帝
          南無阿彌多婆耶
          跢他伽多耶
          阿囉訶帝
          三藐三菩陀耶
          南無婆伽婆帝
          阿芻鞞耶
          跢他伽多耶
          阿囉訶帝
          三藐三菩陀耶
          南無婆伽婆帝
          鞞沙闍耶
          俱嚧吠柱唎耶
          般囉婆囉闍耶
          跢他伽多耶
          南無婆伽婆帝
          三補師毖多
          薩憐捺囉剌闍耶
          跢他伽多耶
          阿囉訶帝
          三藐三菩陀耶
          南無婆伽婆帝
          舍雞野母那曳
          跢他伽多耶
          阿囉訶帝
          三藐三菩陀耶
          南無婆伽婆帝
          剌怛那雞都囉闍耶
          跢他伽多耶
          阿囉訶帝
          三藐三菩陀耶
          帝瓢
          南無薩羯唎多
          翳曇婆伽婆多
          薩怛他伽都瑟尼釤
          薩怛多般怛㘕
          南無阿婆囉視躭 般囉帝 揚岐囉 薩囉婆 部多揭囉訶 尼揭囉訶 羯迦囉訶尼 跋囉毖地耶 叱陁你
          阿迦囉 蜜唎柱 般唎怛囉耶 儜揭唎 薩囉婆 槃陀那 目叉尼 薩囉婆 突瑟吒 突悉乏 般那你
          伐囉尼 赭都囉 失帝南 羯囉訶 薩訶薩囉 若闍 毘多崩 娑那羯唎 阿瑟吒冰舍帝南 那叉刹怛囉
          若闍 波囉薩陀 那羯唎 阿瑟吒南 摩訶揭囉訶 若闍 毘多崩薩 那羯唎 薩婆舍都嚧 你婆囉 若闍
          呼藍突悉乏 難遮那舍尼 毖沙舍 悉怛囉 阿吉尼 烏陀迦囉 若闍 阿般囉視多具囉 摩訶般囉戰持
          摩訶疊多 摩訶帝闍 摩訶稅多闍婆囉 摩訶跋囉槃陀囉 婆悉你 阿唎耶多囉 毘唎俱知 誓婆毘闍耶
          跋闍囉 摩禮底 毘舍嚧多 勃騰罔迦 跋闍囉 制喝那阿遮 摩囉制婆 般囉質多 跋闍囉擅持 毘舍囉遮
          扇多舍 鞞提婆 補視多 蘇摩嚧波 摩訶稅多 阿唎耶多囉 摩訶婆囉阿般囉 跋闍囉商揭囉制婆
          跋闍囉俱摩唎 俱藍陀唎 跋闍囉喝薩多遮 毘地耶 乾遮那 摩唎迦 啒蘇母 婆羯囉多那 鞞嚧遮那
          俱唎耶 夜囉菟 瑟尼釤 毘折藍婆摩尼遮 跋闍囉迦那迦波囉婆 嚧闍那 跋闍囉頓稚遮 稅多遮 迦摩囉
          刹奢尸 波囉婆 翳帝夷帝 母陀囉 羯拏 娑鞞囉懺 掘梵都 印兎那 麼麼寫 烏(合牛) 唎瑟揭拏 般剌舍悉多
          薩怛他 伽都瑟尼釤 虎(合牛) 都嚧雍 瞻婆那 虎(合牛) 都嚧雍 悉躭婆那 虎(合牛) 都嚧雍 波囉瑟地耶
          三般叉 拏羯囉 虎(合牛) 都嚧雍 薩婆藥叉 喝囉刹娑 揭囉訶若闍 毘騰崩薩那羯囉 虎(合牛) 都嚧雍
          者都囉 尸底南 揭囉訶 娑訶薩囉南 毘騰崩薩那囉 虎(合牛) 都盧雍 囉叉 婆伽梵 薩怛他 伽都瑟尼釤
          波囉 點闍吉唎 摩訶娑訶薩囉 勃樹娑訶薩囉 室唎沙 俱知娑訶薩泥 帝隸阿弊提視婆唎多
          吒吒甕迦 摩訶跋闍嚧陀囉 帝唎菩婆那 曼茶囉 烏(合牛) 娑悉帝 薄婆都 麼麼 印兎那 麼麼寫
          囉闍 婆夜 主囉跋夜 阿祇尼婆夜 烏陀迦婆夜 毘沙婆夜 舍薩多囉婆夜 婆囉斫羯囉婆夜
          突瑟叉婆夜 阿舍你婆夜 阿迦囉 密唎柱婆夜 陀囉尼部彌劍 波伽波陁婆夜 烏囉迦婆多婆夜
          剌闍壇茶婆夜 那伽婆夜 毘條怛婆夜 蘇波囉拏婆夜 藥叉揭囉訶
          囉叉私揭囉訶 畢唎多揭囉訶 毘舍遮揭囉訶 部多揭囉訶 鳩槃茶揭囉訶 補丹那揭囉訶
          迦吒補丹那揭囉訶 悉乾度揭囉訶 阿播悉摩囉揭囉訶 烏檀摩陀揭囉訶 車夜揭囉訶
          醯唎婆帝揭囉訶 社多訶唎南 揭婆訶唎南 嚧地囉訶唎南 忙娑訶唎南 謎陀訶唎南
          摩闍訶唎南 闍多訶唎女 視比多訶唎南 毘多訶唎南 婆多訶唎南 阿輸遮訶唎女 質多訶唎女
          帝釤薩鞞釤 薩婆揭囉訶南 毘陀耶闍 瞋陀夜彌 雞囉夜彌 波唎跋囉者迦 訖唎擔 毘陀夜闍
          瞋陀夜彌 雞囉夜彌 茶演尼 訖唎擔 毘陀夜闍 瞋陀夜彌 雞囉夜彌 摩訶般輸般怛夜 嚧陀囉
          訖唎擔 毘陀夜闍 瞋陀夜彌 雞囉夜彌 那囉夜拏訖唎擔 毘陀夜闍 瞋陀夜彌 雞囉夜彌
          怛埵伽嚧茶西 訖唎擔 毘陀夜闍 瞋陀夜彌 雞囉夜彌 摩訶迦囉 摩怛唎伽拏 訖唎擔 毘陀夜闍
          瞋陀夜彌 雞囉夜彌 迦波唎迦 訖唎擔 毘陀夜闍 瞋陀夜彌 雞囉夜彌 闍耶羯囉 摩度羯囉
          薩婆囉他娑達那 訖唎擔 毘陀夜闍 瞋陀夜彌 雞囉夜彌 赭咄囉婆耆你 訖唎擔 毘陀夜闍
          瞋陀夜彌 雞囉夜彌 毘唎羊訖唎知 難陀雞沙囉 伽拏般帝 索醯夜訖唎擔 毘陀夜闍 瞋陀夜彌
          雞囉夜彌 那揭那舍囉婆拏 訖唎擔 毘陀夜闍 瞋陀夜彌 雞囉夜彌 阿羅漢 訖唎擔
          毘陀夜闍 瞋陀夜彌 雞囉夜彌 毘多囉伽 訖唎擔 毘陀夜闍 瞋陀夜彌 雞囉夜彌
          跋闍囉波你 具醯夜具醯夜 迦地般帝 訖唎擔 毘陀夜闍 瞋陀夜彌 雞囉夜彌 囉叉罔
          婆伽梵 印兎那麼麼寫 泮吒 泮吒泮吒泮吒泮吒 娑訶 醯醯泮 阿牟迦耶泮 阿波囉提訶多泮
          婆囉波囉陀泮 阿素囉 毘陀囉 波迦泮 薩婆提鞞弊泮 薩婆那伽弊泮 薩婆藥叉弊泮
          薩婆乾闥婆弊泮 薩婆補丹那弊泮 迦吒補丹那弊泮 薩婆突狼枳帝弊泮 薩婆突歰比犁
          訖瑟帝 弊泮 薩婆什婆利弊泮 薩婆阿播悉摩犁弊泮 薩婆舍囉婆拏弊泮 薩婆地帝雞弊泮
          薩婆怛摩陀繼弊泮 薩婆毘陀耶 囉誓遮犁 弊泮 闍夜羯囉 摩度羯囉 薩婆囉他娑陀雞弊泮
          毘地夜 遮唎弊泮 者都囉 縛耆你弊泮 跋闍囉 俱摩唎 毘陀夜 囉誓弊泮 摩訶波囉丁羊
          乂耆唎弊泮 跋闍囉商羯囉夜 波囉丈耆囉闍耶泮 摩訶迦囉夜 摩訶末怛唎迦拏
          南無娑羯唎多夜泮 毖瑟拏婢曳泮 勃囉訶牟尼曳泮 阿耆尼曳泮 摩訶羯唎曳泮
          羯囉檀遲曳泮 蔑怛唎曳泮 嘮怛唎曳泮 遮文茶曳泮 羯邏囉怛唎曳泮 迦般唎曳泮
          阿地目質多迦尸摩舍那 婆私你曳泮 演吉質 薩埵婆寫 麼麼 印兎那麼麼寫
          突瑟吒質多
          阿末怛唎質多 烏闍訶囉 伽婆訶囉 嚧地囉訶囉 婆娑訶囉 摩闍訶囉 闍多訶囉
          視毖多訶囉 跋略夜訶囉 乾陀訶囉 布史波訶囉 頗囉訶囉 婆寫訶囉 般波質多
          突瑟吒質多 嘮陀囉質多 藥叉揭囉訶 囉刹娑揭囉訶 閉隸多揭囉訶 毘舍遮揭囉訶
          部多揭囉訶 鳩槃茶揭囉訶 悉乾陀揭囉訶 烏怛摩陀揭囉訶 車夜揭囉訶 阿播薩摩囉
          揭囉訶 宅袪革 茶耆尼揭囉訶 唎佛帝揭囉訶 闍彌迦揭囉訶 舍俱尼揭囉訶 姥陀囉難地迦揭囉訶
          阿藍婆揭囉訶 乾度波尼揭囉訶 什伐囉 堙迦醯迦 墜帝藥迦 怛隸帝藥迦 者突託迦
          昵提什伐囉 毖釤摩什伐囉 薄底迦 鼻底迦 室隸瑟密迦 娑你般帝迦 薩婆什伐囉
          室嚧吉帝 末陀鞞達嚧制劍 阿綺嚧鉗 目佉嚧鉗 羯唎突嚧鉗 揭囉訶揭藍 羯拏輸藍
          憚多輸藍 迄唎夜輸藍 末麼輸藍 跋唎室婆輸藍 毖栗瑟吒輸藍 烏陀囉輸藍 羯知輸藍
          跋悉帝輸藍 鄔嚧輸藍 常伽輸藍 喝悉多輸藍 跋陀輸藍 娑房盎伽 般囉丈伽輸藍
          部多毖哆茶 茶耆尼 什婆囉 陀突嚧迦 建咄嚧吉知 婆路多毘 薩般嚧 訶凌伽 輸沙怛囉
          娑那羯囉 毘沙喻迦 阿耆尼烏陀迦 末囉鞞囉 建跢囉 阿迦囉 密唎咄 怛斂部迦
          地栗剌吒 毖唎瑟質迦 薩婆那俱囉 肆引伽弊 揭囉唎藥叉 怛囉芻 末囉視 吠帝釤
          娑鞞釤 悉怛多鉢怛囉 摩訶跋闍嚧 瑟尼釤 摩訶般賴丈耆藍 夜波突陀 舍喻闍那
          辮怛隸拏 毗陀耶 槃曇迦嚧彌 帝殊槃曇 迦嚧彌 般囉毘陀槃曇 迦嚧彌 跢姪他 唵 阿那隸
          毘舍提 鞞囉 跋闍囉陀唎 槃陀槃陀你 跋闍囉 謗尼泮 虎(合牛) 都嚧甕泮 莎婆訶
        </textarea>
      </div>
    </div>
  );
};