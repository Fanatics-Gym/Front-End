import React from "react";
import termsPDF from "../../../pdf/Terms_of_Cost.docx.pdf";

const TermsOfCost = () => {
  return (
    <div className="componentCont">
      <div className="termsHeader">
        <div>
          <h2>Terms of Cost</h2>
          <a href={termsPDF} download className="downloadLink">
            Download as PDF
          </a>
        </div>
      </div>
      <div className="termsContent">
        <div>
          <ol type="I">
            <li>
              <ol type="A">
                <li>
                  &nbsp;<b>SEASON {"&"} GEAR:</b> &nbsp; The cost for “Season{" "}
                  {"&"} Gear” includes the following: (i) Participation in an
                  8-Game Season (includes Practice Game/Week 0 {"&"}{" "}
                  Postseason/Playoffs – if your team makes it), (ii) helmet,
                  shoulder pads, leg pads, uniform(s), back plate (<b>“Gear”</b>
                  ).
                </li>
                <li>
                  &nbsp;<b>SECURITY DEPOSIT:</b> &nbsp; (Participant) (You)
                  “Security Deposit” (Security Deposit) will be held by Fanatics
                  Football. All, or any portion of the Security Deposit, may be
                  used, as reasonably necessary, to: (i) replace lost Gear of
                  Participant and (ii) replace damaged (excluding ordinary
                  damage/wear {"&"}
                  tear) Gear of Participant.
                </li>
                <ol type="1">
                  <li>
                    &nbsp; If all or any amount of the Security Deposit is used
                    during Participant’s participation, Participant agrees to
                    reinstate the total amount of Security Deposit within
                    fourteen (14) days after Fanatics Football gives Participant
                    notice, via email. If the total amount of the Security
                    Deposit is not reinstated within 14 days, Fanatics Football
                    reserves the right to immediately terminate Participant from
                    participating in, but not limited to, the following: any
                    current and/or further activities, events, games, and
                    functions of/put on by Fanatics Football.
                  </li>
                </ol>
              </ol>
            </li>
            <li>
              <ol type="A">
                <li>
                  &nbsp;<b>RETURN GEAR:</b> At the end of Participant’s last
                  game, Participant agrees to return all Gear to Fanatics
                  Football.
                </li>
                <ol type="1">
                  <li>
                    {" "}
                    &nbsp; Participant agrees and understands that all Gear is
                    to be returned to Fanatics Football within 14 days after the
                    Participant’s last game.
                  </li>
                  <ol type="a">
                    <li>
                      &nbsp; If Participant’s Gear is not returned to Fanatics
                      Football within 14 days, Participant agrees to pay a
                      $100.00 Late Fee (<b>Late Fee</b>), starting on the 15th
                      day, and Participant agrees to pay an additional $100.00
                      Late Fee for each day that Participant’s Gear is not
                      returned to Fanatics Football
                    </li>
                    <li>
                      &nbsp; If Participant fails to return the Gear to Fanatics
                      Football within 24 days, Participant agrees to pay
                      $1,000.00 to Fanatics Football and forfeits all/any
                      remaining amount of the Security Deposit to Fanatics
                      Football.
                    </li>{" "}
                    <li>
                      &nbsp; Participant agrees to and understands that the
                      Security Deposit, or any amount of the Security Deposit,
                      is not and will not be used/put toward the $1,000.00 that
                      is specified in paragraph 2.A.(a) {"&"} (b).
                    </li>
                  </ol>
                  <li>
                    &nbsp; Within 21 days after all the Gear is returned to and
                    received by Fanatics Football, Fanatics Football will email
                    Participant an itemized statement of all lost and/or damaged
                    Gear (if any) and the amount of the Security Deposit used
                    (if any) to replace the item(s) of the Gear and return any
                    remaining amount of the Security Deposit to the Participant.
                  </li>
                  <li>
                    &nbsp; Please, note that any amount of the Security Deposit
                    will not be returned to the Participant until after all
                    items of the Gear are returned to and received by Fanatics
                    Football and the/all Late Fees (if any) are paid.
                  </li>
                </ol>
              </ol>
            </li>
            <li>
              <ol type="A">
                <li>
                  &nbsp;<b>PARTICIPANT CANCELLATION:</b> &nbsp; Participant may
                  cancel their participation at any time during their
                  participation by emailing Fanatics Football at
                  customerservice@fanaticsfb.com.
                </li>
                <ol type="1">
                  <li>
                    &nbsp; If Participant cancels their participation before
                    Week 0, Fanatics Football will issue a full refund, to
                    Participant, minus/less a $250.00 Cancelation Fee (
                    <b>Cancelation Fee</b>
                    ).
                  </li>
                  <li>
                    &nbsp; If Participant cancels their participation after Week
                    0, Participant agrees to and understands that Fanatics
                    Football will not issue Participant a refund, in any amount,
                    to the Participant.
                  </li>
                  <ol type="a">
                    <li>
                      &nbsp; If Participant cancels their participation after
                      Week 0, Participant aggress to return all Gear to Fanatics
                      Football within 14 days after Participant’s cancelation
                      following the RETURN GEAR procedure as specified in
                      paragraphs 2.A.(1).(a),(b),(c),(2), {"&"} (3).
                    </li>
                  </ol>
                </ol>
              </ol>
            </li>
            <li>
              <ol type="A">
                <li>
                  &nbsp;<b>TERMINATION:</b> &nbsp; Fanatics Football reserves
                  the right to immediately terminate, without warning,
                  Participant from participating in, but not limited to, the
                  following: any current and/or further activities, events,
                  games, and functions of/put on by Fanatics Football.
                </li>
                <ol type="1">
                  <li>
                    &nbsp; In the event the Participant is terminated,
                    Participant aggress to return all Gear to Fanatics Football
                    within 14 days after Participant’s termination by following
                    the RETURN GEAR
                  </li>
                  <li>
                    &nbsp; After all Gear is returned to and received by
                    Fanatics Football, Participant agrees to and understands
                    that Fanatics Football reserves the right to not issue
                    Participant a refund, in any amount.
                  </li>
                  <li>
                    &nbsp; Participant agrees to and understands that if/when
                    the Participant’s Security Deposit is returned, it will be
                    minus/less a $350.00 Termination Fee (<b>Termination Fee</b>
                    ).
                  </li>
                </ol>
              </ol>
            </li>
          </ol>
        </div>
        <a className="downloadLink" href={termsPDF} download>
          Download as PDF
        </a>
      </div>
    </div>
  );
};

export default TermsOfCost;
