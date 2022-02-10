import { Link } from "../../../routes";
import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import Layout from "../../../components/Layout";

class RequestIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    return { address };
  }
  render() {
    return (
      <Layout>
        <Link route={`/campaigns/${this.props.address}/requests/new`}>
          <a>
            <Button></Button>
          </a>
        </Link>
      </Layout>
    );
  }
}

export default RequestIndex;
