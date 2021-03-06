"""Corrected field errors

Revision ID: 417d4ab56c8f
Revises: 6ec3ea936a31
Create Date: 2020-10-05 17:09:54.608650

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '417d4ab56c8f'
down_revision = '6ec3ea936a31'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('collections', sa.Column('categoryId', sa.Integer(), nullable=False))
    op.create_foreign_key(None, 'collections', 'categories', ['categoryId'], ['id'])
    op.drop_column('collections', 'category')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('collections', sa.Column('category', sa.VARCHAR(length=100), autoincrement=False, nullable=False))
    op.drop_constraint(None, 'collections', type_='foreignkey')
    op.drop_column('collections', 'categoryId')
    # ### end Alembic commands ###
