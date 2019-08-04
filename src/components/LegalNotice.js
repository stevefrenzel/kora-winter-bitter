import React from 'react';

export default class LegalNotice extends React.Component {
    render() {
        return (
            <React.Fragment>
                {/* GROUP 2*/}
                <div onClick={this.props.handleChange} id="legal_notice_component">
                    <section id="legalNotice">
                        <h2>Information in accordance with section 5 TMG</h2>
                        <p>Hakan Halaç</p>
                        <p>Roseggerstrasse 40</p>
                        <p>12059 Berlin</p>
                        <p>Germany</p>
                    </section>

                    <section id="contact">
                        <h2>Contact</h2>
                        <p>E-Mail: info [at] korawinter [dot] de</p>
                        <p>Website: korawinter.de</p>
                    </section>

                    <section id="personResponsible">
                        <h2>Person responsible for content in accordance with 55 Abs. 2 RStV</h2>
                        <p>Hakan Halaç</p>
                    </section>

                    <section id="indicationImagesGraphics">
                        <h2>Indication of source for images and graphics</h2>
                        <p>Kora Winter</p>
                    </section>

                    <section id="disclaimer">
                        <h2>Disclaimer</h2>
                        <br />
                        <h3>Accountability for content</h3>
                        <p>
                            The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents’ accuracy, completeness or topicality.
                            According to statutory provisions, we are furthermore responsible for our own content on these web pages.
                            In this context, please note that we are accordingly not obliged to monitor merely the transmitted or saved information of third parties,
                            or investigate circumstances pointing to illegal activity. Our obligations to remove or block the use of information under generally applicable
                            laws remain unaffected by this as per §§ 8 to 10 of the Telemedia Act (TMG).
                        </p>
                        <br />
                        <h3>Accountability for links</h3>
                        <p>
                            Responsibility for the content of external links (to web pages of third parties) lies solely with the operators of the linked pages.
                            No violations were evident to us at the time of linking. Should any legal infringement become known to us, we will remove the respective
                            link immediately.
                        </p>
                        <br />
                        <h3>Copyright</h3>
                        <p>
                            Our web pages and their contents are subject to German copyright law. Unless expressly permitted by law (§ 44a et seq. of the copyright law),
                            every form of utilizing, reproducing or processing works subject to copyright protection on our web pages requires the prior consent of the
                            respective owner of the rights. Individual reproductions of a work are allowed only for private use, so must not serve either directly or
                            indirectly for earnings. Unauthorized utilization of copyrighted works is punishable (§ 106 of the copyright law).
                        </p>
                    </section>
                </div>
            </React.Fragment>
        );
    }
}