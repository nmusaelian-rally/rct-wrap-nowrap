import { createRef, useLayoutEffect, useState } from 'react';
import './TimelineGroupTemplate.scss';
function TimelineGroupTemplate({ group }) {
    const groupRef = createRef();
    const [className, setClassName] = useState('group-name');
    useLayoutEffect(() => {
        let parentNodeHeight = groupRef.current.parentNode.offsetHeight;
        if (parentNodeHeight === 30) {
            setClassName('group-name-nowrap') 
        }
    }, []);
    console.log('className', className);
    return (
        <div ref={groupRef}>
            <h2 className={className}>{group.title}</h2>
        </div>
    )
}
export default TimelineGroupTemplate;
