const forgotPassword = function (userId: string, userOtp: string) {
  const html = `
  <!DOCTYPE html>
<html
  lang="en"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <meta charset="utf-8" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="format-detection"
      content="telephone=no, date=no, address=no, email=no"
    />
    <title>Khôi phục lại mật khẩu</title>
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700"
      rel="stylesheet"
      media="screen"
    />
    <style>
      .hover-underline:hover {
        text-decoration: underline !important;
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }

      @keyframes ping {
        75%,
        100% {
          transform: scale(2);
          opacity: 0;
        }
      }

      @keyframes pulse {
        50% {
          opacity: 0.5;
        }
      }

      @keyframes bounce {
        0%,
        100% {
          transform: translateY(-25%);
          animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
        }

        50% {
          transform: none;
          animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }
      }

      @media (max-width: 600px) {
        .sm-px-24 {
          padding-left: 24px !important;
          padding-right: 24px !important;
        }

        .sm-py-32 {
          padding-top: 0px !important;
          padding-bottom: 0px !important;
        }

        .sm-w-full {
          width: 100% !important;
        }
      }

      .confirm-link {
        display: flex !important;
        text-decoration: none !important;
        align-items: center !important;
      }
      .confirm-link:hover {
        text-decoration: underline !important;
      }
    </style>
  </head>

  <body
    style="
      margin: 0;
      padding: 0;
      width: 100%;
      word-break: break-word;
      -webkit-font-smoothing: antialiased;
      --bg-opacity: 1;
      background-color: #eceff1;
    "
  >
    <div
      role="article"
      aria-roledescription="email"
      aria-label="Reset your Password"
      lang="en"
    >
      <table
        style="
          font-family: Montserrat, -apple-system, 'Segoe UI', sans-serif;
          width: 100%;
        "
        width="100%"
        cellpadding="0"
        cellspacing="0"
        role="presentation"
      >
        <tr>
          <td
            align="center"
            style="
              --bg-opacity: 1;
              background-color: #7d1f1f;
              font-family: Montserrat, -apple-system, 'Segoe UI', sans-serif;
            "
          >
            <table
              class="sm-w-full"
              style="font-family: 'Montserrat', Arial, sans-serif; width: 600px"
              width="600"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
            >
              <tr>
                <td
                  class="sm-py-32 sm-px-24"
                  style="
                    font-family: Montserrat, -apple-system, 'Segoe UI',
                      sans-serif;
                    padding: 16px;
                    text-align: center;
                  "
                  align="center"
                >
                  <a
                    href=""
                    style="
                      border: 0;
                      max-width: 100%;
                      line-height: 100%;
                      vertical-align: middle;
                    "
                  >
                  </a>
                </td>
              </tr>
              <tr>
                <td
                  align="center"
                  class="sm-px-24"
                  style="font-family: 'Montserrat', Arial, sans-serif"
                >
                  <table
                    style="
                      font-family: 'Montserrat', Arial, sans-serif;
                      width: 100%;
                    "
                    width="100%"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                  >
                    <tr>
                      <td
                        class="sm-px-24"
                        style="
                          --bg-opacity: 1;
                          background-color: #ffffff;
                          border-radius: 4px;
                          font-family: Montserrat, -apple-system, 'Segoe UI',
                            sans-serif;
                          font-size: 14px;
                          line-height: 24px;
                          padding: 32px;
                          text-align: left;
                          --text-opacity: 1;
                          color: #626262;
                        "
                        align="left"
                      >
                        <a
                          href="${process.env.NEXT_PUBLIC_USER_URL}"
                          style="
                            display: flex;
                            align-items: center;
                            justify-content: center;
                          "
                        >
                          <img
                            alt="logo_school"
                            src="https://utfs.io/f/03d733f4-fb82-413f-83fd-ca12163fce2d-okd3lw.png"
                            width="111"
                            height="58"
                          />
                        </a>
                        <p
                          style="
                            font-weight: 600;
                            font-size: 18px;
                            margin-bottom: 0;
                          "
                        >
                          Xin chào,
                        </p>

                        <p style="margin: 0 0 24px">
                          Một yêu cầu khôi phục mật khẩu từ trang Quản lý du học
                          cho email [EMAIL] đã được gửi cho bạn. Vui lòng nhấn
                          vào đường dẫn bên dưới để tiến hành đặt lại mật khẩu
                        </p>

                        <a
                          href="${
                            process.env.NEXT_PUBLIC_USER_URL
                          }/quenmatkhau/${userOtp + "" + userId}"
                          class="confirm-link"
                          style="
                            justify-content: center !important;
                            color: #7367f0;
                          "
                        >
                          <span>Nhấn vào đây để tiếp tục</span>
                        </a>

                        <p>
                          Vui lòng bỏ qua email này nếu bạn không phải là cá
                          nhân yêu cầu khôi phục lại mật khẩu
                        </p>
                        <table
                          style="font-family: 'Montserrat', Arial, sans-serif"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                        >
                          <tr>
                            <td
                              style="
                                --bg-opacity: 1;
                                background-color: #7367f0;
                                border-radius: 4px;
                                font-family: Montserrat, -apple-system,
                                  'Segoe UI', sans-serif;
                              "
                            ></td>
                          </tr>
                        </table>

                        <table
                          style="
                            font-family: 'Montserrat', Arial, sans-serif;
                            width: 100%;
                          "
                          width="100%"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                        >
                          <tr>
                            <td
                              style="
                                font-family: 'Montserrat', Arial, sans-serif;
                                padding-top: 32px;
                                padding-bottom: 32px;
                              "
                            >
                              <div
                                style="
                                  --bg-opacity: 1;
                                  background-color: #7d1f1f;
                                  height: 1px;
                                  line-height: 1px;
                                "
                              >
                                &zwnj;
                              </div>
                            </td>
                          </tr>
                        </table>
                        <p style="margin: 0 0 16px">
                          Cần thêm thông tin hỗ trợ từ chúng tôi? Xin vui lòng
                          liên hệ tại
                          <a
                            href="mailto:cigpbubu@gmail.com"
                            class="hover-underline"
                            style="
                              --text-opacity: 1;
                              color: #7367f0;
                              text-decoration: none;
                            "
                            >cigpbubu@gmail.com</a
                          >.
                        </p>
                        <p style="margin: 0 0 16px">
                          Cảm ơn, <br />
                          <a
                            href="${process.env.NEXT_PUBLIC_USER_URL}"
                            style="
                              text-decoration: none;
                              font-weight: bold;
                              color: black;
                            "
                            class="hover-underline"
                          >
                            Hệ thống quản lý du học sinh Canada
                          </a>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style="
                          font-family: 'Montserrat', Arial, sans-serif;
                          height: 32px;
                        "
                        height="32"
                      ></td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>
`;
  const text = `
      Quên mật khẩu, vui lòng bấm vào đường link được cung cấp để đặt lại mật khẩu`;
  return {
    html: html,
    text: text,
  };
};

export default forgotPassword;
