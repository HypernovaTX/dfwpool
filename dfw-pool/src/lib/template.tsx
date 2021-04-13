export default class Template {
    test: number;
    key: number;

    constructor(cTest: number) {
        this.test = cTest;
        this.key = 0;
    }

    public misc_key(): number {
        return this.key ++;
    }

    public header(): JSX.Element {
        return (
            <div key='_h' className='section head'>
                <div key='_hc' className='section-container'>
                    <div key='_hcc' className='section-content'>
                        <div key='_hcc_t' className='section-t head'>JJ Pools n Patios</div>
                        <div key='_hcc_p' className='section-p head'>About us goes here....lorem ipsum.....etc....etc..</div>
                        <input key='_hcc_b' type='button' className='section-b head' value='Reach out to us today!'/>
                    </div>
                </div>
            </div>
        )
    }

    public wavyBorder(y: number): JSX.Element {
        const rawY = y/5;
        let trimmedY = Math.min(120, rawY);
        const style = { marginTop: `${-trimmedY}px` };
        return (
            <div key='_s1_wave' className='wavy-border' style={style}></div>
        );
    }

    public section1(): JSX.Element {
        return (
            <div key='_s1' className='section'>
                <div key='_s1c' className='section-container'>
                    Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>
                    Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>
                    Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>
                    Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>
                    Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>
                    Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>Stuff<br/>
                </div>
            </div>
        );
    }
    
}