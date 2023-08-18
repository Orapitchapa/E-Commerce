import { CommentOutlined, EnvironmentOutlined, FacebookOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons"
import { Divider, Grid } from "@mui/material"
import { Button, Form, Input } from "antd"
import TextArea from "antd/es/input/TextArea"

const Contact = () => {
    return (
        <div style={{ paddingTop: '60px' }}>
            <h1>Contact</h1>
            <Grid container spacing={2} sx={{ padding: 5 }}>
                <Grid xs={12} sm={6} md={6} sx={{ paddingTop: 7, paddingRight: 7 }} style={{ fontSize: '18px', }}>
                    <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                        <MailOutlined style={{ marginRight: '30px' }} />
                        iamear@gmail.com
                    </div>
                    <Divider />
                    <div style={{ marginBottom: '15px', marginTop: '15px', display: 'flex', alignItems: 'center' }}>
                        <PhoneOutlined style={{ marginRight: '30px' }} />
                        062-493-3427
                    </div>
                    <Divider />
                    <div style={{ marginBottom: '15px', marginTop: '15px' }}>
                        <CommentOutlined style={{ marginRight: '30px' }} />
                        Line ID : iamear.shop
                    </div>
                    <Divider />
                    <div style={{ marginBottom: '15px', marginTop: '15px' }}>
                        <FacebookOutlined style={{ marginRight: '30px' }} />
                        Page : iamear.shop
                    </div>
                    <Divider />
                    <div style={{ marginBottom: '15px', marginTop: '15px' }}>
                        <EnvironmentOutlined style={{ marginRight: '30px' }} />
                        66 Sukhumvit Road, Paknam, Muengsamutprakarn, Samutprakarn, 10270
                    </div>
                    <Divider />
                </Grid>
                <Grid xs={12} sm={6} md={6} sx={{ paddingLeft: 7 }} style={{ fontSize: '18px', }}>
                    <h3>Contact Us</h3>
                    <Form labelCol={{ span: 4 }} wrapperCol={{ span: 16 }} layout="horizontal">
                        <Form.Item label="Firstname">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Lastname">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Subject">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Message">
                            <TextArea rows={4} />
                        </Form.Item>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button type="primary" htmlType="submit">
                                Send
                            </Button>
                        </div>
                    </Form>
                </Grid>
            </Grid>
        </div>
    )
}

export default Contact