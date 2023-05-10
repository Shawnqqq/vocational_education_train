import middle_1 from './中级/中级-理论-第一章节：职业道德 练习题.json'
import middle_2 from './中级/中级-技能-第一章节：环境创设 练习题.json'
import middle_3 from './中级/中级-理论-第二章节：基础知识 练习题.json'
import middle_4 from './中级/中级-技能-第二章节：生活照料 练习题.json'
import middle_5 from './中级/中级-技能-第三章节：早期学习支持 练习题.json'
import middle_6 from './中级/中级-技能-第三章节：安全健康管理 练习题1.json'
import middle_7 from './中级/中级-技能-第三章节：安全健康管理 练习题2.json'
import middle_8 from './中级/中级-技能-第四章节：合作共育 练习题.json'
import middle_9 from './中级/中级-保育师综合练习题1.json'
import middle_10 from './中级/中级-保育师综合练习题2.json'
import middle_11 from './中级/中级-保育师综合练习题3.json'
import middle_12 from './中级/中级-保育师综合练习题4.json'

import elementary_1 from './初级/初级-理论-第一章节：职业道德 练习题.json'
import elementary_2 from './初级/初级-技能-第一章节：环境创设 练习题.json'
import elementary_3 from './初级/初级-理论-第二章节：基础知识 练习题.json'
import elementary_4 from './初级/初级-技能-第二章节：生活照料 练习题1.json'
import elementary_5 from './初级/初级-技能-第二章节：生活照料 练习题2.json'
import elementary_6 from './初级/初级-技能-第三章节：早期学习支持 练习题.json'
import elementary_7 from './初级/初级-技能-第三章节：安全健康管理 练习题.json'
import elementary_8 from './初级/初级-技能-第四章节：合作共育 练习题.json'
import elementary_9 from './初级/初级-保育师综合练习题1.json'
import elementary_10 from './初级/初级-保育师综合练习题2.json'
import elementary_11 from './初级/初级-保育师综合练习题3.json'
import elementary_12 from './初级/初级-保育师综合练习题4.json'

import middle_nursery_1 from './中级育婴师/中级-技能-第一章节：生活照料 练习题.json'
import middle_nursery_2 from './中级育婴师/中级-理论-第一章节：职业道德 练习题.json'
import middle_nursery_3 from './中级育婴师/中级-理论-第二章节：基础知识 练习题.json'
import middle_nursery_4 from './中级育婴师/中级-技能-第二章节：保健与护理 练习题.json'
import middle_nursery_5 from './中级育婴师/中级-技能-第三章节：健康与管理 练习题.json'
import middle_nursery_6 from './中级育婴师/中级-技能-第四章节：教育实施 练习题1.json'
import middle_nursery_7 from './中级育婴师/中级-技能-第四章节：教育实施 练习题2.json'
import middle_nursery_8 from './中级育婴师/中级-育婴员综合练习题1.json'
import middle_nursery_9 from './中级育婴师/中级-育婴员综合练习题2.json'

import exam_63_1 from './6.3考试练习题/练习题1-100.json'
import exam_63_2 from './6.3考试练习题/练习题101-220.json'
import exam_63_3 from './6.3考试练习题/练习题221-300.json'
import exam_63_4 from './6.3考试练习题/练习题301-364.json'

const middleResource = {
  '中级-理论-第一章节：职业道德 练习题': middle_1,
  '中级-技能-第一章节：环境创设 练习题': middle_2,
  '中级-理论-第二章节：基础知识 练习题': middle_3,
  '中级-技能-第二章节：生活照料 练习题': middle_4,
  '中级-技能-第三章节：早期学习支持 练习题': middle_5,
  '中级-技能-第三章节：安全健康管理 练习题1': middle_6,
  '中级-技能-第三章节：安全健康管理 练习题2': middle_7,
  '中级-技能-第四章节：合作共育 练习题': middle_8,
  '中级-保育师综合练习题1': middle_9,
  '中级-保育师综合练习题2': middle_10,
  '中级-保育师综合练习题3': middle_11,
  '中级-保育师综合练习题4': middle_12
}

const elementaryRes = {
  '初级-理论-第一章节：职业道德 练习题': elementary_1,
  '初级-技能-第一章节：环境创设 练习题': elementary_2,
  '初级-理论-第二章节：基础知识 练习题': elementary_3,
  '初级-技能-第二章节：生活照料 练习题1': elementary_4,
  '初级-技能-第二章节：生活照料 练习题2': elementary_5,
  '初级-技能-第三章节：早期学习支持 练习题': elementary_6,
  '初级-技能-第三章节：安全健康管理 练习题': elementary_7,
  '初级-技能-第四章节：合作共育 练习题': elementary_8,
  '初级-保育师综合练习题1': elementary_9,
  '初级-保育师综合练习题2': elementary_10,
  '初级-保育师综合练习题3': elementary_11,
  '初级-保育师综合练习题4': elementary_12
}

const middleNurseryResource = {
  '中级-技能-第一章节：生活照料 练习题': middle_nursery_1,
  '中级-理论-第一章节：职业道德 练习题': middle_nursery_2,
  '中级-理论-第二章节：基础知识 练习题': middle_nursery_3,
  '中级-技能-第二章节：保健与护理 练习题': middle_nursery_4,
  '中级-技能-第三章节：健康与管理 练习题': middle_nursery_5,
  '中级-技能-第四章节：教育实施 练习题1': middle_nursery_6,
  '中级-技能-第四章节：教育实施 练习题2': middle_nursery_7,
  '中级-育婴员综合练习题1': middle_nursery_8,
  '中级-育婴员综合练习题2': middle_nursery_9
}

const exam63Resource = {
  '练习题1-100': exam_63_1,
  '练习题101-220': exam_63_2,
  '练习题221-300': exam_63_3,
  '练习题301-364': exam_63_4
}

export default {
  'middle': middleResource,
  'elementary': elementaryRes,
  'middleNursery': middleNurseryResource,
  'exam63': exam63Resource
}