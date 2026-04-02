import NavbarHeader from "../../components/NavbarHeader"
import ContactFooter from "../../components/ContactFooter"
import PageHeader from "../../components/PageHeader"

export default function FinalReflection() {
  return (
    <>
      <NavbarHeader />
      <PageHeader title="Final Reflection" />
      <div className="container py-5 text-center">
        <i className="bi bi-pencil-square display-1 mb-4" style={{ color: "var(--primary-logo-color-dark)" }}></i>
        <h2 className="mb-3">Work in Progress</h2>
        <p className="lead text-muted">
          The final reflection is currently being written and will be available soon. Check back later!
        </p>
      </div>
      <ContactFooter />
    </>
  )
}
