import styles from "../constants/styles";



let fonts = {
    h1: {
        fontWeight: '700',
        fontSize: '72px',
        lineHeight: '88px',

        [styles.bp(1700)]: {
            fontSize: '64px',
            lineHeight: '78px',
        },
        [styles.bp(1300)]: {
            fontSize: '48px',
            lineHeight: '48px',
        },
        [styles.bp(900)]: {
            fontSize: '36px',
            lineHeight: '38px',
        },
        [styles.bp(700)]: {
            fontSize: '22px',
            lineHeight: '27px',
        },
    },

    h1u: {
        fontWeight: '700',
        fontSize: '72px',
        lineHeight: '88px',
        textTransform: 'uppercase',

        [styles.bp(1700)]: {
            fontSize: '64px',
            lineHeight: '78px',
        },
        [styles.bp(1300)]: {
            fontSize: '48px',
            lineHeight: '50px',
        },
        [styles.bp(900)]: {
            fontSize: '36px',
            lineHeight: '38px',
        },
        [styles.bp(700)]: {
            fontSize: '24px',
            lineHeight: '29px',
        },
    },

    h1s: {
        fontWeight: '400',
        fontSize: '21px',
        lineHeight: '31px',

        [styles.bp(1700)]: {
            fontSize: '18px',
            lineHeight: '24px',
        },
        [styles.bp(900)]: {
            fontSize: '15px',
            lineHeight: '20px',
        },
        [styles.bp(700)]: {
            fontSize: '14px',
            lineHeight: '21px',
        },
    },

    h2: {
        fontWeight: '300',
        fontSize: '60px',
        lineHeight: '74px',

        [styles.bp(1700)]: {
            fontSize: '48px',
            lineHeight: '60px',
        },
        [styles.bp(1300)]: {
            fontSize: '36px',
            lineHeight: '44px',
        },
        [styles.bp(900)]: {
            fontSize: '28px',
            lineHeight: '38px',
        },
        [styles.bp(700)]: {
            fontSize: '24px',
            lineHeight: '30px',
        },
    },

    h3: {
        fontWeight: '300',
        fontSize: '36px',
        lineHeight: '44px',

        [styles.bp(1700)]: {
            fontSize: '32px',
            lineHeight: '40px',
        },
        [styles.bp(1300)]: {
            fontSize: '24px',
            lineHeight: '31px',
        },
        [styles.bp(700)]: {
            fontSize: '18px',
            lineHeight: '24px',
        },
    },

    nav: {
        fontWeight: '700',
        fontSize: '12px',
        lineHeight: '15px',
        textTransform: 'uppercase',

        [styles.bp(1300)]: {
            fontSize: '16px',
            lineHeight: '20px',
        },
        [styles.bp(700)]: {
            fontSize: '14px',
            lineHeight: '17px',
        },
    },

    pn: {
        fontWeight: '200',
        fontSize: '214px',
        lineHeight: '261px',
        textTransform: 'uppercase',

        [styles.bp(1700)]: {
            fontSize: '160px',
            lineHeight: '195px',
        },
        [styles.bp(1300)]: {
            fontSize: '110px',
            lineHeight: '134px',
        },
        [styles.bp(700)]: {
            fontSize: '64px',
            lineHeight: '78px',
        },
    },

    p0: {
        fontWeight: '700',
        fontSize: '122px',
        lineHeight: '149px',
        textTransform: 'uppercase',

        [styles.bp(1700)]: {
            fontSize: '96px',
            lineHeight: '122px',
        },
        [styles.bp(1300)]: {
            fontSize: '86px',
            lineHeight: '110px',
        },
        [styles.bp(900)]: {
            fontSize: '72px',
            lineHeight: '94px',
        },
        [styles.bp(700)]: {
            fontSize: '48px',
            lineHeight: '58px',
        },
    },

    p1: {
        fontWeight: '300',
        fontSize: '60px',
        lineHeight: '74px ',

        [styles.bp(1700)]: {
            fontSize: '48px',
            lineHeight: '60px',
        },
        [styles.bp(1300)]: {
            fontSize: '36px',
            lineHeight: '44px',
        },
        [styles.bp(900)]: {
            fontSize: '28px',
            lineHeight: '38px',
        },
        [styles.bp(700)]: {
            fontSize: '24px',
            lineHeight: '30px',
        },
    },

    p2: {
        fontWeight: '300',
        fontSize: '36px',
        lineHeight: '44px',

        [styles.bp(1700)]: {
            fontSize: '32px',
            lineHeight: '40px',
        },
        [styles.bp(1300)]: {
            fontSize: '24px',
            lineHeight: '31px ',
        },
        [styles.bp(700)]: {
            fontSize: '18px',
            lineHeight: '24px',
        },
    },

    p3: {
        fontSize: '21px',
        lineHeight: '31px',

        [styles.bp(1300)]: {
            fontSize: '18px',
            lineHeight: '26px',
        },
        [styles.bp(700)]: {
            fontSize: '14px',
            lineHeight: '24px  ',
        },
    },

    p4: {
        fontSize: '21px',
        lineHeight: '31px',

        [styles.bp(1700)]: {
            fontSize: '18px',
            lineHeight: '24px',
        },
        [styles.bp(900)]: {
            fontSize: '16px',
            lineHeight: '21px',
        },
        [styles.bp(700)]: {
            fontWeight: '500',
            fontSize: '13px',
            lineHeight: '18px',
        },
    },

    p5: {
        fontSize: '18px',
        lineHeight: '24px',

        [styles.bp(1700)]: {
            fontSize: '16px',
            lineHeight: '24px',
        },

        [styles.bp(900)]: {
            fontSize: '14px',
            lineHeight: '21px',
        },
    },

    p5s: {
        fontSize: '18px',
        lineHeight: '24px',

        [styles.bp(1700)]: {
            fontSize: '16px',
            lineHeight: '24px',
        },

        [styles.bp(900)]: {
            fontSize: '12px',
            lineHeight: '21px',
        },
        [styles.bp(700)]: {
            fontSize: '10px',
            lineHeight: '18px',
        },
    },

    p5u: {
        fontSize: '18px',
        lineHeight: '24px',
        fontWeight: '700',
        textTransform: 'uppercase',

        [styles.bp(1700)]: {
            fontSize: '16px',
            lineHeight: '24px',
        },
        [styles.bp(700)]: {
            fontSize: '14px',
            lineHeight: '21px',
        },
    },

    p6: {
        fontSize: '16px',
        lineHeight: '24px',

        [styles.bp(900)]: {
            fontSize: '14px',
            lineHeight: '21px',
        },
        [styles.bp(700)]: {
            fontSize: '13px',
            lineHeight: '19px',
        },
    },

    p6f: {
        fontSize: '16px',
        lineHeight: '24px',

        [styles.bp(1300)]: {
            fontSize: '12px',
            lineHeight: '18px',
        },
        [styles.bp(700)]: {
            fontSize: '10px',
            lineHeight: '15px',
        },
    },

    p7: {
        fontSize: '16px',
        lineHeight: '20px',

        [styles.bp(1700)]: {
            fontSize: '14px',
            lineHeight: '21px',
            fontWeight: '300',
        },
        [styles.bp(900)]: {
            fontSize: '12px',
            lineHeight: '18px',
        },
        [styles.bp(700)]: {
            fontWeight: '400',
            fontSize: '10px',
            lineHeight: '18px',
        },
    },

    p8: {
        fontSize: '14px',
        lineHeight: '18px',

        [styles.bp(900)]: {
            fontSize: '12px',
            lineHeight: '16px',
        },
    },

    p9: {
        fontSize: '12px',
        lineHeight: '15px',

        [styles.bp(700)]: {
            fontWeight: '300',
            fontSize: '10px',
            lineHeight: '13px',
        },
    },

    p10: {
        fontSize: '11px',
        lineHeight: '16px',
        letterSpacing: '0.36em',
        fontWeight: '700',
        textTransform: 'uppercase',
    },

    p10z: {
        fontSize: '18px',
        lineHeight: '24px',
        letterSpacing: '0.36em',
        fontWeight: '700',
        textTransform: 'uppercase',

        [styles.bp(900)]: {
            fontSize: '16px',
            lineHeight: '21px',
            letterSpacing: '0.3em',
        },

        [styles.bp(700)]: {
            fontSize: '14px',
            lineHeight: '18px',
        },
    },

    b1: {
        fontSize: '14px',
        lineHeight: '17px',
        fontWeight: '700',
        textTransform: 'uppercase',

        [styles.bp(700)]: {
            fontSize: '12px',
            lineHeight: '15px',
        },
    },

    d0: {
        fontFamily: 'inspiration',
        fontSize: '421px',
        lineHeight: '100%',

        [styles.bp(1700)]: {
            fontSize: '288px',
        },
        [styles.bp(1300)]: {
            fontSize: '250px',
        },
        [styles.bp(900)]: {
            fontSize: '200px',
        },
        [styles.bp(700)]: {
            fontSize: '144px',
        },
    },

    d1: {
        fontFamily: 'inspiration',
        fontSize: '358px',
        lineHeight: '100%',

        [styles.bp(1700)]: {
            fontSize: '250px',
        },
        [styles.bp(1300)]: {
            fontSize: '220px',
        },
        [styles.bp(900)]: {
            fontSize: '180px',
        },
        [styles.bp(700)]: {
            fontSize: '72px',
        },
    },

    d2: {
        fontFamily: 'inspiration',
        fontSize: '148px',
        lineHeight: '124.5%',

        [styles.bp(1700)]: {
            fontSize: '140px',
        },
        [styles.bp(1300)]: {
            fontSize: '130px',
            lineHeight: '123.5%',
        },
        [styles.bp(900)]: {
            fontSize: '100px',
            lineHeight: '124.5%',
        },
        [styles.bp(700)]: {
            fontSize: '80px',
            lineHeight: '105.5%',
        },
    },

    d3: {
        fontFamily: 'inspiration',
        fontSize: '72px',
        lineHeight: '100%',

        [styles.bp(1700)]: {
            fontSize: '64px',
        },
        [styles.bp(1300)]: {
            fontSize: '48px',
        },
        [styles.bp(900)]: {
            fontSize: '42px',
        },
    },

    d4: {
        fontFamily: 'inspiration',
        fontSize: '48px',
        lineHeight: '100%',

        [styles.bp(1700)]: {
            fontSize: '36px',
        },

        [styles.bp(900)]: {
            fontSize: '24px',
            lineHeight: '116.5%',
        },
        [styles.bp(700)]: {
            fontSize: '18px',
            lineHeight: '126.5%',
        },
    },
};



export default fonts;
