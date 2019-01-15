//connect img for tab
import myPicture from 'additionals/Tabs/pictureForTab.png'

const activeTabs = {
  FIRST: 'FIRST',
  SECOND: 'SECOND',
  THIRD: 'THIRD'
}

const myContent = {
  FIRST: myPicture,
  SECOND: 'this is text 2',
  THIRD: 'this is text 3'
}

const textForTab = [
  {value: activeTabs.FIRST, title: 'Tab 1'},
  {value: activeTabs.SECOND, title: 'Tab 2'},
  {value: activeTabs.THIRD, title: 'Tab 3'}
]

export {
    textForTab,
    myContent,
    activeTabs
}
