import React from "react";
import ChatBot from "react-simple-chatbot";
import Bca from "./UG/Bca";
import Bba from "./UG/Bba";
import Bcom from "./UG/Bcom";
import Bsc from "./UG/Bsc";
import Biotech from "./UG/Biotech";
import BcomIsm from "./UG/Bcomism";
import Mca from "./PG/Mca";
import Mhr from "./PG/Mhr";
import Mmark from "./PG/Mmark";
import Mfinace from "./PG/Mfinace";
import Msc from "./PG/Msc";
import Mtech from "./PG/Mtech";
import Mcom from "./PG/Mcom";

function Test() {
    const steps = [
        {
            id: "01",
            message: "Hi Whats Your Name",
            trigger: "02"
        },
        {
            id: "02",
            user: true,
            trigger: "03"
        },
        {
            id: "03",
            message: "Hi {previousValue} How May I help You",
            trigger: "04"
        },
        {
            id: "04",
            options: [
                {
                    value: 1,
                    label: "Contact",
                    trigger: "1"
                }, {
                    value: 2,
                    label: "Service",
                    trigger: "2"
                },
            ]
        }, 
        {
            id: "1",
            message: "Please Provide Your Email and Mobile",
            trigger: "user"
        },
        {
            id: "user",
            user: true,
            trigger: "val"
        },
        {
            id: "val",
            message: "Thank for the input Our Admin team will contact You ASAP",
            trigger: "con"
        }, 
        {
            id: "con",
            message: "Thank You want to continue",
            trigger: "option"
        },
        {
            id: "option",
            options: [
                {
                    value: '1',
                    label: "Yes",
                    trigger: '2'
                }, {
                    value: '2',
                    label: "No",
                    message: "Thank your contacting our chat"
                },
            ]
        }, 
        {
            id: "2",
            options: [
                {
                    value: "1",
                    label: "Fees",
                    trigger: "fee"
                }, {
                    value: "2",
                    label: "Course",
                    trigger: "course"
                }, {
                    value: "4",
                    label: "Admin",
                    trigger: "admin"
                },
            ]
        }, 
        {
            id: "fee",
            options: [
                {
                    value: "1",
                    label: "UG",
                    trigger: "fcourse"
                }, {
                    value: "2",
                    label: "PG",
                    trigger: "fpcourse"
                },
            ]
        }, 
        {
            id: "fcourse",
            options: [
                {
                    value: "1",
                    label: "BCA",
                    trigger: "fbca"
                },
                {
                    value: "1",
                    label: "BBA",
                    trigger: "fbba"
                },
                {
                    value: "1",
                    label: "B.Com",
                    trigger: "fbcom"
                },
                {
                    value: "1",
                    label: "B.Com(ISM)",
                    trigger: "fbism"
                }, {
                    value: "1",
                    label: "Bsc",
                    trigger: "fbsc"
                },
            ]
        }, 
        {
            id: "fpcourse",
            options: [
                {
                    value: "1",
                    label: "MCA",
                    trigger: "fmca"
                },
                {
                    value: "1",
                    label: "MBA",
                    trigger: "fmba"
                },
                {
                    value: "1",
                    label: "M.Com",
                    trigger: "fmcom"
                },
                {
                    value: "1",
                    label: "M.Com(ISM)",
                    trigger: "fmism"
                }, {
                    value: "1",
                    label: "Msc",
                    trigger: "fmsc"
                },
            ]
        }, 
        {
            id: "fbca",
            component: (
                <div>
                    <div>
                        <h6>1st Year:53000</h6>
                        <h6>2nd year:52000</h6>
                        <h6>3rd Year:47000</h6>
                    </div>
                    <div>
                        <h6 className="text-primary">For More Info Contact Admin</h6>
                    </div>
                </div>
            ),
            trigger: "continue"
        }, 
        {
            id: "fbba",
            component: (
                <div>
                    <div>
                        <h6>1st Year:43000</h6>
                        <h6>2nd year:42000</h6>
                        <h6>3rd Year:40000</h6>
                    </div>
                    <div>
                        <h6 className="text-primary">For More Info Contact Admin</h6>
                    </div>
                </div>
            ),
            trigger: "continue"
        }, 
        {
            id: "fbcom",
            component: (
                <div>
                    <div>
                        <h6>1st Year:35000</h6>
                        <h6>2nd year:32000</h6>
                        <h6>3rd Year:30000</h6>
                    </div>
                    <div>
                        <h6 className="text-primary">For More Info Contact Admin</h6>
                    </div>
                </div>
            ),
            trigger: "continue"
        }, {
            id: "fbism",
            component: (
                <div>
                    <div>
                        <h6>1st Year:49000</h6>
                        <h6>2nd year:47000</h6>
                        <h6>3rd Year:45000</h6>
                    </div>
                    <div>
                        <h6 className="text-primary">For More Info Contact Admin</h6>
                    </div>
                </div>
            ),
            trigger: "continue"
        }, 
        {
            id: "fbsc",
            component: (
                <div>
                    <div>
                        <h6>1st Year:54000</h6>
                        <h6>2nd year:53000</h6>
                        <h6>3rd Year:49000</h6>
                    </div>
                    <div>
                        <h6 className="text-primary">For More Info Contact Admin</h6>
                    </div>
                </div>
            ),
            trigger: "continue"
        }, 
        {
            id: "fmca",
            component: (
                <div>
                    <div>
                        <h6>1st Year:80000</h6>
                        <h6>2nd year:77000</h6>
                        <h6>3rd Year:75000</h6>
                    </div>
                    <div>
                        <h6 className="text-primary">For More Info Contact Admin</h6>
                    </div>
                </div>
            ),
            trigger: "continue"
        }, 
        {
            id: "fmba",
            component: (
                <div>
                    <div>
                        <h6>1st Year:850000</h6>
                        <h6>2nd year:82000</h6>
                        <h6>3rd Year:79000</h6>
                    </div>
                    <div>
                        <h6 className="text-primary">For More Info Contact Admin</h6>
                    </div>
                </div>
            ),
            trigger: "continue"
        }, 
        {
            id: "fmism",
            component: (
                <div>
                    <div>
                        <h6>1st Year:75000</h6>
                        <h6>2nd year:71000</h6>
                        <h6>3rd Year:68000</h6>
                    </div>
                    <div>
                        <h6 className="text-primary">For More Info Contact Admin</h6>
                    </div>
                </div>
            ),
            trigger: "continue"
        }, 
        {
            id: "fmsc",
            component: (
                <div>
                    <div>
                        <h6>1st Year:79000</h6>
                        <h6>2nd year:76000</h6>
                        <h6>3rd Year:73000</h6>
                    </div>
                    <div>
                        <h6 className="text-primary">For More Info Contact Admin</h6>
                    </div>
                </div>
            ),
            trigger: "continue"
        }, 
        {
            id: "fmcom",
            component: (
                <div>
                    <div>
                        <h6>1st Year:80000</h6>
                        <h6>2nd year:78000</h6>
                        <h6>3rd Year:76000</h6>
                    </div>
                    <div>
                        <h6 className="text-primary">For More Info Contact Admin</h6>
                    </div>
                </div>
            ),
            trigger: "continue"
        }, 
        {
            id: "course",
            options: [
                {
                    value: "1",
                    label: "UG",
                    trigger: "ug"
                }, {
                    value: "2",
                    label: "PG",
                    trigger: "pg"
                },
            ]
        }, 
        {
            id: "ug",
            options: [
                {
                    value: "1",
                    label: "BCA",
                    trigger: "bca"
                },
                {
                    value: "2",
                    label: "BBA",
                    trigger: "bba"
                },
                {
                    value: "3",
                    label: "B.Com",
                    trigger: "bcom"
                },
                {
                    value: "4",
                    label: "Bio-Tech",
                    trigger: "biotech"
                }, {
                    value: "5",
                    label: "Bsc(CS)",
                    trigger: "bsc"
                }, {
                    value: "6",
                    label: "B.com(ISM)",
                    trigger: "bcomism"
                },
            ]
        }, 
        {
            id: "pg",
            options: [
                {
                    value: "1",
                    label: "MCA",
                    trigger: "mca"
                },
                {
                    value: "2",
                    label: "MBA",
                    trigger: "mba"
                },
                {
                    value: "3",
                    label: "M.Com",
                    trigger: "mcom"
                },
                {
                    value: "4",
                    label: "MTech",
                    trigger: "mtech"
                }, {
                    value: "5",
                    label: "Msc.CS",
                    trigger: "msc"
                },
            ]
        }, 
        {
            id: "continue",
            message: "ToContinue",
            trigger: "val"
        }, 
        {
            id: "val",
            options: [
                {
                    value: "1",
                    label: "YES",
                    trigger: "2"
                }, {
                    value: "2",
                    label: "NO",
                    trigger: "thank"
                },
            ]
        }, 
        {
            id: "bca",
            component: <Bca />,
            trigger: "continue"
        }, 
        {
            id: "bba",
            component: <Bba />,
            trigger: "continue"
        }, 
        {
            id: "bcom",
            component: <Bcom />,
            trigger: "continue"
        }, 
        {
            id: "biotech",
            component: <Biotech />,
            trigger: "continue"
        }, 
        {
            id: "bsc",
            component: <Bsc />,
            trigger: "continue"
        }, 
        {
            id: "bcomism",
            component: <BcomIsm />,
            trigger: "continue"
        }, 
        {
            id: "thank",
            message: "Thank You Bye",
            end: true
        }, 
        {
            id: "mca",
            component: <Mca />,
            trigger: "continue"
        }, 
        {
            id: "mba",
            options: [
                {
                    value: "1",
                    label: "MBA(HumanResources)",
                    trigger: "mhr"
                }, {
                    value: "1",
                    label: "MBA(Markenting)",
                    trigger: "mmark"
                }, {
                    value: "1",
                    label: "MBA(Finance)",
                    trigger: "mfin"
                },
            ],
            trigger: "continue"
        }, 
        {
            id: "mhr",
            component: <Mhr />,
            trigger: "continue"
        }, 
        {
            id: "mmark",
            component: <Mmark />,
            trigger: "continue"
        }, 
        {
            id: "mfin",
            component: <Mfinace />,
            trigger: "continue"
        }, 
        {
            id: "mcom",
            component: <Mcom />,
            trigger: "continue"
        }, 
        {
            id: "mtech",
            component: <Mtech />,
            trigger: "continue"
        }, 
        {
            id: "msc",
            component: <Msc />,
            trigger: "continue"
        }, {
            id: "admin",
            options: [
                {
                    value: "1",
                    label: "Contact",
                    trigger: "cont"
                }, {
                    value: "2",
                    label: "HelpDesk",
                    trigger: "help"
                },
            ],
            trigger: "continue"
        }, 
        {
            id: "cont",
            message: "admin@gmail.com"
        }, 
        {
            id: "help",
            message: "helpdesk@gmail.com"
        },
    ];
    return (
        <div className="container"
            style={
                { marginLeft: "400px" }
            }>
            <ChatBot steps={steps} />
        </div>
    );
}

export default Test;
