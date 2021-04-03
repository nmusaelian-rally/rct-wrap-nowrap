import ReactCalendarTimeline from './ReactCalendarTimeline';
import moment from 'moment'

function PlanningTimeline(props) {
    const groups = [{ id: 1, title: 'group1 with very long name' }, 
                    { id: 2, title: 'group2 with very long name' },
                    { id: 3, title: 'group3' },
                    { id: 4, title: 'group4 with very long name' }]
    const items = [
        {
          id: 1,
          group: 1,
          title: 'item1',
          start_time: moment(),
          end_time: moment().add(1, 'day')
        },
        {
          id: 2,
          group: 2,
          title: 'item2',
          start_time: moment().add(-0.5, 'day'),
          end_time: moment().add(0.5, 'day')
        },
        {
          id: 3,
          group: 1,
          title: 'item3',
          start_time: moment().add(2, 'day'),
          end_time: moment().add(3, 'day')
        },
        {
          id: 4,
          group: 1,
          title: 'item4',
          start_time: moment().add(2, 'day'),
          end_time: moment().add(3, 'day')
        },
        {
          id: 5,
          group: 3,
          title: 'item5',
          start_time: moment().add(3, 'day'),
          end_time: moment().add(4, 'day')
        }
      ]

    return (
        <ReactCalendarTimeline
          groups={groups}
          items={items}
        />
      );
}
export default PlanningTimeline;