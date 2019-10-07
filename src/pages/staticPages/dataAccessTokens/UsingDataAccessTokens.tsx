import * as React from 'react';
import {PageLayout} from "../../../shared/components/PageLayout/PageLayout";
import AppConfig from "appConfig";
import StaticContent from "../../../shared/components/staticContent/StaticContent";
import Helmet from "react-helmet";

export default class UsingDataAccessTokens extends React.Component<{}, {}> {

    public render() {
        return <PageLayout className={'whiteBackground staticPage'}>
            <Helmet>
                <title>{'cBioPortal for Cancer Genomics::Using Data Access Tokens'}</title>
            </Helmet>
            <StaticContent sourceUrl={AppConfig.serverConfig.skin_documentation_dat!} title={"Using Data Access Tokens"}/>
        </PageLayout>
    }

}




