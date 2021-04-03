import { createRef, useLayoutEffect } from 'react'
import Timeline from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css'
import './ReactCalendarTimelineOverrides.scss'
import TimelineGroupTemplate from './templates/TimelineGroupTemplate'
import moment from 'moment'

const timelineRef = createRef();

const ReactCalendarTimeline = props => {
    const {
        groups,
        items
      } = props;
    
    /* useLayoutEffect(() => {
      console.log('timelineRef.current.state.groupHeights', 
                    timelineRef.current.state.groupHeights) //[60, 30, 30, 30]
    },[]) */

    return (
      <Timeline
      groups={groups}
      groupRenderer={TimelineGroupTemplate}
      items={items}
      stackItems
      ref={timelineRef}
      defaultTimeStart={moment().add(-12, 'day')}
      defaultTimeEnd={moment().add(12, 'day')}
    />
    )
}
export default ReactCalendarTimeline;