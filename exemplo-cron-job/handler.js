'use strict';
/*
* event: Informações relativas ao evento ocorrido.
* context: contém informações do contexto da chamada, nome da função na configuração, versão, limite de memória, log.
  Mais informações: http://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
  
  Não esquecer de configurar  as variáveis de ambiente:
  AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY

  Permissões:
{
    "Version": "201-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "cloudformation:CreateStack",
                "cloudformation:DescribeStacks",
                "cloudformation:DescribeStacksEvents",
                "cloudformation:DescribeStackResources",
                "cloudformation:DescribeStackResource",
                "cloudformation:UpdateStack",
                "cloudformation:ListStacks",
                "iam:GetRole",
                "lambda:UpdateFunctionCode",
                "lambda:UpdateFunctionConfig",
                "lambda:GetFunctionConfiguration",
                "lambda:AddPermission",
                "s3:DeleteObject",
                "s3:GetObject",
                "s3:ListBucket",
                "s3:PutObject"
            ],
            "Resource": "*"
        }
    ]
}
OU AdministratorAccess
*/
module.exports.ipt_serverless = (event, context, callback) => { //Função a ser chamada
  console.log("Ok - rodou");
  callback(null, "Cronjob rodou com sucesso!", event);

};
