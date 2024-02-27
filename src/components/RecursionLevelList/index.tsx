/* eslint-disable */
import React, { useState, useEffect } from 'react'
import RecursionLevelChildren from './RecursionLevelChildren'
import { RoundedProgressBar } from './RoundedProgressBar'
import { assembleData } from './utils/index'
import './css/RecursionLevelList.css'

// interface IChapterCourse {
//   name: string
//   next: IChapterCourse[]
// }

// interface IPropType {
//   list: IChapterCourse[] // 产品树
//   current?: number // 当前类型
//   callback?: Function // 回调函数， 自定义跳转
//   commodityId?: string // 商品ID
//   skuCode?: string // sku规格
//   isHideProgress?: boolean // 是否隐藏学习进度
//   defaultExpan?: boolean
//   allExpan?: boolean
//   statics?: any // 统计数据
//   styles?: object // 自定义样式
//   goSign?: any //
//   importType?: number // 0正常树,1视屏树
//   curUnitId?: string //当前选中的单元
// }

export default function RecursionLevelList(props: any) {
  const {
    list,
    current = 0,
    callback,
    isHideProgress = false,
    defaultExpan,
    statics,
    importType = 0,
    curUnitId = '',
    allExpan = false
  } = props

  // 章节课第一行默认展开
  useEffect(() => {
    if (defaultExpan && list?.length > 0) {
      justOpen(list[0])
    }
    if (allExpan && list?.length > 0) {
      let preClickIdArr2: any = []
      list.forEach((item: any) => {
        preClickIdArr2.push(item.name)
      })
      setPreClickIdArr(preClickIdArr2)
    }
  }, [list])

  const [preClickIdArr, setPreClickIdArr] = useState([])
  const openClose = (item: any) => {
    const currentVal = item.name
    let preClickIdArr2 = JSON.parse(JSON.stringify(preClickIdArr))
    if (preClickIdArr2.indexOf(currentVal) === -1) {
      preClickIdArr2.push(currentVal)
    } else {
      preClickIdArr2.splice(preClickIdArr2.indexOf(currentVal), 1)
    }
    setPreClickIdArr(preClickIdArr2)
  }
  // 只是打开
  const justOpen = (item: any) => {
    const currentVal = item.name
    let preClickIdArr2 = JSON.parse(JSON.stringify(preClickIdArr))
    if (preClickIdArr2.indexOf(currentVal) === -1) {
      preClickIdArr2.push(currentVal)
    }
    setPreClickIdArr(preClickIdArr2)
  }

  const hasPreClickId = (arr: any, name: any) => {
    if (arr.indexOf(name) > -1) {
      return true
    } else {
      return false
    }
  }

  const findPreview = (next: any) => {
    const find = (next: any) => {
      return next.find((item: any) => {
        if (item.next) {
          return find(item.next)
        }
        if (item.preview) {
          return true
        }
      })
    }
    return !!find(next)
  }

  return (
    <div className='page1'>
      <div className='group1'>
        {list &&
          list.map((item: any, index: number) => {
            const { next } = item
            // 查找是否有试学
            let isPreivew = findPreview(next)
            // 学习进度
            const { speedRate = 0, spnum = 0 } = assembleData(item, statics)

            return (
              <div key={item.name}>
                <div className='group2'>
                  <div
                    onClick={() => {
                      openClose(item)
                    }}
                  >
                    {item.nodeType === 'J' ? (
                      <div
                        className={
                          importType == 1 ? 'group21_shixue' : 'group21'
                        }
                        style={{
                          marginTop: index > 0 ? 20 : 0
                        }}
                      >
                        <div
                          className={
                            importType == 1 ? 'group23_shixue' : 'group23'
                          }
                        >
                          <span className='text21'> </span>
                          <span
                            className={
                              importType == 1 ? 'text22_shixue' : 'text22'
                            }
                          >
                            {item.name}
                          </span>
                        </div>
                        {hasPreClickId(preClickIdArr, item.name) ? (
                          //   <p
                          //     name="chevron-up"
                          //     size={18}
                          //     color={"#333333"}
                          //     style={{ marginRight: 10 }}
                          //   />
                          <div
                            className='iconfont  icon-symbol_up'
                            style={{
                              marginRight: 20,
                              color: importType == 1 ? 'rgb(255, 255, 255)' : ''
                            }}
                          ></div>
                        ) : (
                          //   <p
                          //     name="chevron-down"
                          //     size={18}
                          //     color={"#333333"}
                          //     style={{ marginRight: 10 }}
                          //   />
                          <div
                            className='iconfont  icon-symbol_down'
                            style={{
                              marginRight: 20,
                              color: importType == 1 ? 'rgb(255, 255, 255)' : ''
                            }}
                          ></div>
                        )}
                      </div>
                    ) : (
                      <div
                        style={{
                          paddingTop: 16,
                          paddingRight: 10,
                          paddingLeft: 10
                        }}
                      >
                        <div className={index == 0 ? 'group3Top' : 'group3'}>
                          {importType == 1 ? (
                            hasPreClickId(preClickIdArr, item.name) ? (
                              // <p name="expand_1_1" size={18} color={'#333333'} />
                              <div className='expand_1_1_shixue'></div>
                            ) : (
                              // <p name="expand_1_2" size={18} color={'#333333'} />
                              <div className='expand_1_2_shixue'></div>
                            )
                          ) : importType == 0 ? (
                            hasPreClickId(preClickIdArr, item.name) ? (
                              // <p name="expand_1_1" size={18} color={'#333333'} />
                              <div className='expand_1_1 iconfont icon-expand_1_1 '></div>
                            ) : (
                              // <p name="expand_1_2" size={18} color={'#333333'} />
                              <div className='expand_1_2 iconfont icon-expand_1_2'></div>
                            )
                          ) : null}
                          <div className='text1Wrap'>
                            <span
                              className={
                                importType === 1 ? 'text1 text1-video' : 'text1'
                              }
                            >
                              {item.name}
                            </span>
                            {isPreivew ? (
                              <span className='text10'>试学</span>
                            ) : null}
                          </div>
                        </div>
                        {!isHideProgress ? (
                          <div className='group4'>
                            {speedRate ? (
                              <RoundedProgressBar
                                progress={speedRate}
                                width={40}
                                height={6}
                                color='#E51600'
                                borderRadius={4}
                                trailColor={
                                  importType === 1
                                    ? '#E5E6EB'
                                    : 'rgba(0,0,0,0.06)'
                                }
                              />
                            ) : null}
                            {speedRate ? (
                              <span className='text2'>{speedRate * 100}%</span>
                            ) : null}
                            <span className='text3'>{spnum}人关注</span>
                          </div>
                        ) : (
                          <div className='group4'>
                            <span className='text3'>{spnum}人关注</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                {hasPreClickId(preClickIdArr, item.name) ? (
                  item.next && item.next.length > 0 ? (
                    <RecursionLevelChildren
                      list={item.next}
                      statics={statics}
                      current={current}
                      callback={callback}
                      productId={item.id}
                      isHideProgress={isHideProgress}
                      importType={importType}
                      curUnitId={curUnitId}
                      defaultExpan={defaultExpan}
                      allExpan={allExpan}
                    />
                  ) : (
                    <div className='group15' key={item.name}>
                      <div className='group16'>
                        {/* <p name="search" size={26} /> */}
                        <span className='group18'>课程内容正在制作中</span>
                      </div>
                    </div>
                  )
                ) : null}
              </div>
            )
          })}
      </div>
    </div>
  )
}
