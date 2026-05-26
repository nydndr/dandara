import { Document, Page, Text, View, StyleSheet, Link } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 10,
    lineHeight: 1.3,
    color: "#000",
    paddingTop: 32,
    paddingBottom: 32,
    paddingHorizontal: 44,
  },
  name: {
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
    marginBottom: 4,
  },
  titleText: {
    fontSize: 12,
    color: "#555",
    marginBottom: 3,
  },
  contact: {
    fontSize: 10,
    color: "#333",
    marginBottom: 8,
  },
  contactLink: {
    fontSize: 10,
    color: "#333",
    textDecoration: "none",
  },
  sectionTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    letterSpacing: 1,
    borderBottomWidth: 0.5,
    borderBottomColor: "#000",
    paddingBottom: 2,
    marginBottom: 4,
    marginTop: 8,
  },
  summaryText: {
    fontSize: 10,
    lineHeight: 1.3,
  },
  entryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 1,
  },
  entryCompany: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
  },
  entryTitle: {
    fontSize: 10,
    color: "#333",
  },
  entryMeta: {
    fontSize: 9,
    color: "#555",
  },
  bulletRow: {
    flexDirection: "row",
    marginBottom: 1,
  },
  bulletDot: {
    fontSize: 10,
    paddingLeft: 4,
    paddingRight: 4,
  },
  bulletText: {
    fontSize: 10,
    lineHeight: 1.3,
    flex: 1,
  },
  educationEntry: {
    marginBottom: 3,
  },
  projectEntry: {
    marginBottom: 2,
  },
  projectName: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
  },
  projectDesc: {
    fontSize: 9,
    color: "#555",
  },
  projectLink: {
    fontSize: 9,
    color: "#555",
    textDecoration: "none",
  },
});

const labels = {
  en: { summary: "Summary", experience: "Professional Experience", education: "Education", projects: "Projects" },
  pt: { summary: "Resumo", experience: "Experiência Profissional", education: "Formação", projects: "Projetos" },
};

export default function ResumePDF({ data, lang }) {
  const d = data[lang];
  const t = labels[lang];

  return (
    <Document
      title={`${d.meta.name} — Resume`}
      author={d.meta.name}
      language={lang}
    >
      <Page size="LETTER" style={styles.page}>
        {/* Header */}
        <Text style={styles.name}>{d.meta.name}</Text>
        <Text style={styles.titleText}>{d.meta.title}</Text>

        {/* Contact — all clickable inline links */}
        <Text style={styles.contact}>
          <Link src={d.meta.emailUrl} style={styles.contactLink}>{d.meta.email}</Link>
          {"  ·  "}
          <Link src={d.meta.websiteUrl} style={styles.contactLink}>{d.meta.website}</Link>
          {"  ·  "}
          <Link src={d.meta.linkedinUrl} style={styles.contactLink}>{d.meta.linkedin}</Link>
          {"  ·  "}
          {d.meta.location}
        </Text>

        {/* Summary */}
        <Text style={styles.sectionTitle}>{t.summary}</Text>
        <Text style={styles.summaryText}>{d.summary}</Text>

        {/* Professional Experience */}
        <Text style={styles.sectionTitle}>{t.experience}</Text>
        {d.experience.map((job, i) => (
          <View key={i} style={{ marginBottom: 5 }}>
            <View style={styles.entryRow}>
              <Text style={styles.entryCompany}>{job.company}</Text>
              <Text style={styles.entryMeta}>{job.period}</Text>
            </View>
            <View style={styles.entryRow}>
              <Text style={styles.entryTitle}>{job.title}</Text>
              <Text style={styles.entryMeta}>{job.location}</Text>
            </View>
            {job.bullets.map((bullet, j) => (
              <View key={j} style={styles.bulletRow}>
                <Text style={styles.bulletDot}>•</Text>
                <Text style={styles.bulletText}>{bullet}</Text>
              </View>
            ))}
          </View>
        ))}

        {/* Education */}
        <Text style={styles.sectionTitle}>{t.education}</Text>
        {d.education.map((edu, i) => (
          <View key={i} style={styles.educationEntry}>
            <View style={styles.entryRow}>
              <Text style={styles.entryCompany}>{edu.institution}</Text>
              <Text style={styles.entryMeta}>{edu.period}</Text>
            </View>
            <Text style={styles.entryTitle}>{edu.degree}</Text>
            {edu.note && <Text style={styles.entryMeta}>{edu.note}</Text>}
          </View>
        ))}

        {/* Projects */}
        <Text style={styles.sectionTitle}>{t.projects}</Text>
        {d.projects.map((proj, i) => (
          <View key={i} style={styles.projectEntry}>
            <Text style={styles.projectName}>{proj.name}</Text>
            <Text style={styles.projectDesc}>{proj.description}</Text>
            {proj.url && (
              <Link src={proj.url} style={styles.projectLink}>
                {proj.url}
              </Link>
            )}
          </View>
        ))}
      </Page>
    </Document>
  );
}
