import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {

    static defaultProps = {
        className: 'content2',
    };

    getDelay = e => e % 3 * 100 + Math.floor(e / 3) * 100 + 300;

    render() {
        const props = {...this.props};
        delete props.isMode;
        const oneAnim = {y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad'};
        const blockArray = [
            {icon: 'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png', title: '预留', content: '文字文字文字文字'},
            {icon: 'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png', title: '预留', content: '文字文字文字文字'},
            {icon: 'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png', title: '预留', content: '文字文字文字文字'},
            {icon: 'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png', title: '预留', content: '文字文字文字文字'},
            {icon: 'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png', title: '预留', content: '文字文字文字文字'},
            {icon: 'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png', title: '预留', content: '文字文字文字文字'},
        ];
        const children = blockArray.map((item, i) => {
            const id = `block${i}`;
            const delay = this.getDelay(i);
            const liAnim = {opacity: 0, type: 'from', ease: 'easeOutQuad', delay};
            const childrenAnim = {...liAnim, x: '+=10', delay: delay + 100,};
            return (<TweenOne
                component="li"
                animation={liAnim}
                key={i}
                id={`${props.id}-${id}`}
            >
                <TweenOne
                    animation={{x: '-=10', opacity: 0, type: 'from', ease: 'easeOutQuad'}}
                    className="img"
                    key="img"
                >
                    <img src={item.icon} width="100%"/>
                </TweenOne>
                <div className="text">
                    <TweenOne key="h1" animation={childrenAnim} component="h1">
                        {item.title}
                    </TweenOne>
                    <TweenOne key="p" animation={{...childrenAnim, delay: delay + 200}} component="p">
                        {item.content}
                    </TweenOne>
                </div>
            </TweenOne>);
        });
        return (
            <div {...props} className={`content-template-wrapper ${props.className}-wrapper`}>
                <OverPack
                    className={`content-template ${props.className}`}
                    location={props.id}
                >
                    <TweenOne
                        key="h1"
                        animation={oneAnim}
                        component="h1"
                        id={`${props.id}-title`}
                        reverseDelay={100}
                    >
                        文字文字文字文字
                    </TweenOne>
                    <TweenOne
                        key="p"
                        animation={{...oneAnim, delay: 100}}
                        component="p"
                        id={`${props.id}-titleContent`}
                    >
                        文字文字文字文字
                    </TweenOne>
                    <QueueAnim
                        key="ul"
                        type="bottom"
                        className={`${props.className}-contentWrapper`}
                        id={`${props.id}-contentWrapper`}
                    >
                        <ul key="ul">
                            {children}
                        </ul>
                    </QueueAnim>
                </OverPack>
            </div>
        );
    }
}


export default Content;
