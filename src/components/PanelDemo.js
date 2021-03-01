import React, { useState } from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { TabView, TabPanel } from 'primereact/tabview';
import { Panel } from 'primereact/panel';
import { Fieldset } from 'primereact/fieldset';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { Password } from 'primereact/password';


export const PanelDemo = () => {
    const [passwordVal, setPasswordVal] = useState('');

    const toolbarItems = [
        {
            label: 'Save',
            icon: 'pi pi-check'
        },
        {
            label: 'Update',
            icon: 'pi pi-upload'
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash'
        },
        {
            label: 'Home Page',
            icon: 'pi pi-home'
        },
    ];

    const toolbarLeftTemplate = () => {
        return (
            <>
                <Button label="New" icon="pi pi-plus" style={{ marginRight: '.5em' }} />
                <Button label="Open" icon="pi pi-folder-open" className="p-button-secondary" />

                <i className="pi pi-bars p-toolbar-separator" style={{ marginRight: '.5em' }}></i>

                <Button icon="pi pi-check" className="p-button-success" style={{ marginRight: '.5em' }} />
                <Button icon="pi pi-trash" className="p-button-warning" style={{ marginRight: '.5em' }} />
                <Button icon="pi pi-print" className="p-button-danger" />
            </>
        )
    };
    const toolbarRightTemplate = <SplitButton label="Options" icon="pi pi-check" model={toolbarItems} menuStyle={{ width: '12rem' }}></SplitButton>;
    const cardHeader = (
        <div className="p-card-title">
            <h5>Card</h5>
            <Button icon="pi pi-plus" className="p-button-text" />
        </div>
    );

    return (
        <div className="p-grid panel-demo">
            <div className="p-col-12">
                <div className="card">
                    <h5>Toolbar</h5>
                    <Toolbar left={toolbarLeftTemplate} right={toolbarRightTemplate}></Toolbar>
                </div>
            </div>
            <div className="p-col-12 p-md-6">
                <div className="card">
                    <h5>AccordionPanel</h5>
                    <Accordion activeIndex={0}>
                        <AccordionTab header="Header I">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </AccordionTab>
                        <AccordionTab header="Header II">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
                            ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
							Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                        </AccordionTab>
                        <AccordionTab header="Header III">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                            et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                            Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
							quo minus.</p>
                        </AccordionTab>
                    </Accordion>
                </div>
                <div className="card">
                    <h5>TabView</h5>
                    <TabView>
                        <TabPanel header="Header I">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></TabPanel>
                        <TabPanel header="Header II">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
                            ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
							Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                        </TabPanel>
                        <TabPanel header="Header III">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                            et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                            Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
							quo minus.</p>
                        </TabPanel>
                    </TabView>
                </div>
            </div>
            <div className="p-col-12 p-md-6">
                <div className="card">
                    <h5>Panel</h5>
                    <Panel header="Header" toggleable>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Panel>
                </div>
                <div className="card">
                    <h5>Fieldset</h5>
                    <Fieldset legend="Legend" toggleable>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Fieldset>
                </div>
                <div className="card">
                    <Card header={cardHeader} subTitle="Subtitle">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Card>
                </div>
            </div>

            <div className="p-col-12">
                <div className="card">
                    <h5>Divider</h5>
                    <div className="p-grid">
                        <div className="p-col-5 p-d-flex p-ai-center p-jc-center">
                            <div className="p-fluid">
                                <div className="p-field">
                                    <span className="p-float-label">
                                        <InputText id="username" type="text" />
                                        <label htmlFor="username">Username</label>
                                    </span>
                                </div>
                                <div className="p-field p-mt-4">
                                    <span className="p-float-label">
                                        <Password id="password" value={passwordVal} type="password" onChange={(e) => setPasswordVal(e.target.value)} />
                                        <label htmlFor="password">Password</label>
                                    </span>
                                </div>
                                <Button label="Login"></Button>
                            </div>
                        </div>
                        <div className="p-col-1">
                            <Divider layout="vertical">
                                <b>OR</b>
                            </Divider>
                        </div>
                        <div className="p-col-5 p-ai-center p-jc-center">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                        voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>

                            <Divider layout="horizontal" align="center">
                                <span className="p-tag">Badge</span>
                            </Divider>

                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                            deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est
                            laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>

                            <Divider align="right">
                                <Button label="Button" icon="pi pi-search" className="p-button-outlined"></Button>
                            </Divider>

                            <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
                            voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur
                            a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis
                            doloribus asperiores repellat.
                            Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien.
                        Morbi dapibus luctus odio.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-col-12">
                <div className="card">
                    <h5>Splitter</h5>
                    <Splitter style={{ height: '300px' }} className="p-mb-5">
                        <SplitterPanel size={40} minSize={10} style={{overflow: 'auto'}}>
                            <div className="p-col p-pt-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                                id est laborum.
                            </div>
                        </SplitterPanel>
                        <SplitterPanel size={80}>
                            <Splitter layout="vertical">
                                <SplitterPanel size={30} style={{overflow: 'auto'}}>
                                    <div className="p-col p-pt-3">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                        doloremque
                                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                                        voluptas
                                        sit
                                        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                        voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius
                                        modi.
                                    </div>
                                </SplitterPanel>
                                <SplitterPanel size={70} style={{overflow: 'auto'}}>
                                    <div className="p-col p-pt-3">
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                                        excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                                        officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                                        rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est
                                        eligendi optio cumque nihil impedit quo minus.
                                    </div>
                                </SplitterPanel>
                            </Splitter>
                        </SplitterPanel>
                    </Splitter>
                </div>
            </div>
        </div>
    )
}
