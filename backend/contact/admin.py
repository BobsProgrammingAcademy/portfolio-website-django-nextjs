from django.contrib import admin
from .models import Contact


class ContactAdmin(admin.ModelAdmin):
  list_display = ('id', 'address', 'email')
  list_display_links = ('id', 'email')
  search_fields = ('title', 'email')
  list_per_page = 20


admin.site.register(Contact, ContactAdmin)
