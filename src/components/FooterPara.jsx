import '../custom.css'

const FooterPara = () => {
  return (
    <>
        <section className='topbar_bg'>
          <div className="container-fluid">
            <div className="row">
            <div className="col">
              <p className="fs-12">
                * Any personal insurance you may have that covers damage to the
                host’s vehicle would kick in before your protection plan, except
                in limited situations for trips booked in Maryland, but this
                protects your own wallet. Liability insurance is provided under
                a policy issued to Turo by Travelers Excess and Surplus Lines
                Company. Terms, conditions, and exclusions apply. The policy
                does not provide coverage for damage to a host’s vehicle.
              </p>
              <p className="fs-12">
                For questions or information about the third party liability
                insurance that is included in protection plans in the US,
                consumers in Maryland and the licensed states listed{" "}
                <span className="text-primary">here</span> may contact Turo
                Insurance Agency at (415) 508-0283 or claims@turo.agency. For
                questions about how damage to a host’s vehicle is handled, visit
                the <span className="text-primary">Turo Support</span> site.
              </p>
              <p className="fs-12">
                When a trip is booked in the state of Washington, physical
                damage to the host’s vehicle is covered by insurance purchased
                by Turo, but the Turo insurance does not change the contractual
                responsibilities of hosts or guests with respect to physical
                damage to a host’s vehicle.
              </p>
              <p className="fs-12">
                ** Terms, conditions, and exclusions apply.
              </p>
            </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default FooterPara;
