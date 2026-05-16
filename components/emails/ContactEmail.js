import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
} from "@react-email/components";


export default function ContactEmail({ name, email, phone, message }) {
    return (
        <Html>
            <Head />
            <Preview>Nuevo mensaje desde el formulario web</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Section style={card}>
                        <Text style={label}>Nuevo contacto</Text>

                        <Heading style={title}>Has recibido un nuevo mensaje</Heading>

                        <Section style={field}>
                            <Text style={fieldLabel}>Nombre</Text>
                            <Text style={fieldValue}>{name}</Text>
                        </Section>

                        <Section style={field}>
                            <Text style={fieldLabel}>Email</Text>
                            <Text style={fieldValue}>{email}</Text>
                        </Section>
                        <Section style={field}>
                            <Text style={fieldLabel}>Teléfono</Text>
                            <Text style={fieldValue}>{phone}</Text>
                        </Section>
                        <Section style={field}>
                            <Text style={fieldLabel}>Mensaje</Text>
                            <Text style={messageText}>{message}</Text>
                        </Section>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}

const main = {
    backgroundColor: "#f6f6f6",
    fontFamily: "Arial, sans-serif",
    padding: "24px 0",
};

const container = {
    maxWidth: "600px",
    margin: "0 auto",
};

const card = {
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "16px",
    padding: "32px",
};

const label = {
    fontSize: "12px",
    letterSpacing: "3px",
    textTransform: "uppercase",
    color: "#ec4899",
    margin: "0 0 12px",
};

const title = {
    fontSize: "28px",
    lineHeight: "1.2",
    margin: "0 0 24px",
    color: "#111827",
};

const field = {
    marginBottom: "20px",
};

const fieldLabel = {
    fontSize: "13px",
    fontWeight: "700",
    color: "#374151",
    margin: "0 0 6px",
};

const fieldValue = {
    fontSize: "16px",
    color: "#111827",
    margin: "0",
};

const messageText = {
    fontSize: "16px",
    lineHeight: "1.7",
    color: "#111827",
    margin: "0",
    whiteSpace: "pre-line",
};