import React, { Component } from "react";
import { Modal, Box } from "~/components";
import { connect } from "react-redux";
import { saveDestination, hideHeader } from "~/actions";

export default function withModal(WrappedComponent) {
  class ModalComponent extends Component {
    state = {
      open: false,
      home: null,
      work: null
    };
    showModal = (name, home, work) => {
      this.setState({ open: true, name, home, work });
    };
    closeModal = () => {
      this.setState({ open: false });
    };
    render() {
      const { name, open, home, work } = this.state;
      return (
        <Box>
          <WrappedComponent {...this.props} showModal={this.showModal} />
          <Modal
            name={name}
            open={open}
            closeModal={this.closeModal}
            saveDestination={type =>
              this.props.saveDestination(type === "home" ? home : work)
            }
            hideHeader={this.props.hideHeader}
          />
        </Box>
      );
    }
  }

  return connect(
    null,
    { saveDestination, hideHeader }
  )(ModalComponent);
}
